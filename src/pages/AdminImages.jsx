import React, { useMemo, useState, useEffect } from 'react';
import { CATEGORIES, FAMOUS_PEOPLE, getAllPeopleWithOverrides } from '../data/people.js';
import { newPeople } from '../data/people_new.js';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../services/firebaseService.js';
import { Search, Save, RotateCcw, ExternalLink, ArrowLeft, Download, LogIn, LogOut, ShieldCheck } from 'lucide-react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../services/firebaseService.js';

export default function AdminImages({ onNavigate }) {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authBusy, setAuthBusy] = useState(false);
  const adminEmails = (import.meta.env.VITE_ADMIN_EMAILS || '').split(',').map(v => v.trim().toLowerCase()).filter(Boolean);
  const isAdmin = Boolean(user?.email && adminEmails.includes(user.email.toLowerCase()));

  useEffect(() => {
    if (!auth) { setAuthReady(true); return undefined; }
    return onAuthStateChanged(auth, (nextUser) => { setUser(nextUser); setAuthReady(true); });
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault(); setAuthError(''); setAuthBusy(true);
    try {
      if (!auth) throw new Error('Firebase Auth belum terkonfigurasi.');
      const result = await signInWithEmailAndPassword(auth, email.trim(), password);
      const allowed = adminEmails.includes((result.user.email || '').toLowerCase());
      if (!allowed) { await signOut(auth); throw new Error('Email ini tidak terdaftar sebagai admin.'); }
      setPassword('');
    } catch (error) { setAuthError(error.code === 'auth/invalid-credential' ? 'Email atau password salah.' : (error.message || 'Login gagal.')); }
    finally { setAuthBusy(false); }
  };

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [revision, setRevision] = useState(0);
  const people = useMemo(() => getAllPeopleWithOverrides(), [revision]);
  const [urls, setUrls] = useState(() => {
    try { return JSON.parse(localStorage.getItem('guesswho_image_overrides') || '{}'); } catch { return {}; }
  });
  const [failed, setFailed] = useState({});
  const [loaded, setLoaded] = useState({});
  const [fallbackTried, setFallbackTried] = useState({});
  const [savedMessage, setSavedMessage] = useState('');
  const [cloudReady, setCloudReady] = useState(false);
  const [cloudBusy, setCloudBusy] = useState(false);
  const [drafts, setDrafts] = useState(() => { try { return JSON.parse(localStorage.getItem('guesswho_people_overrides') || '{}'); } catch { return {}; } });

  useEffect(() => {
    if (!db || !isAdmin) return undefined;
    return onValue(ref(db, 'adminOverrides/people'), (snapshot) => {
      const cloud = snapshot.val() || {};
      setDrafts(cloud);
      setUrls(Object.fromEntries(Object.entries(cloud).filter(([, value]) => value?.imageUrl).map(([id, value]) => [id, value.imageUrl])));
      localStorage.setItem('guesswho_people_overrides', JSON.stringify(cloud));
      localStorage.setItem('guesswho_image_overrides', JSON.stringify(Object.fromEntries(Object.entries(cloud).filter(([, value]) => value?.imageUrl).map(([id, value]) => [id, value.imageUrl]))));
      setRevision(v => v + 1); setCloudReady(true);
    }, (error) => { setSavedMessage(`Gagal membaca override Firebase: ${error.message}`); setCloudReady(true); });
  }, [isAdmin]);

  const updateDraft = (id, field, value) => setDrafts(prev => ({ ...prev, [id]: { ...(prev[id] || {}), [field]: value } }));

  const save = async () => {
    const next = { ...drafts };
    for (const person of people) {
      const current = next[person.id] || {};
      const imageUrl = urls[person.id] ?? current.imageUrl ?? '';
      if (imageUrl || current.acceptedAnswers || current.hints) next[person.id] = { ...current, ...(imageUrl ? { imageUrl } : {}) };
    }
    setCloudBusy(true);
    try {
      if (!db) throw new Error('Firebase Database belum terkonfigurasi.');
      await set(ref(db, 'adminOverrides/people'), next);
      setDrafts(next);
      localStorage.setItem('guesswho_people_overrides', JSON.stringify(next));
      localStorage.setItem('guesswho_image_overrides', JSON.stringify(Object.fromEntries(Object.entries(next).filter(([, value]) => value?.imageUrl).map(([id, value]) => [id, value.imageUrl]))));
      setRevision(v => v + 1); setSavedMessage('Perubahan foto, accepted answers, dan hints tersimpan di Firebase.');
    } catch (error) { setSavedMessage(`Gagal menyimpan ke Firebase: ${error.message}`); }
    finally { setCloudBusy(false); }
  };

  const exportFiles = () => {
    const overrideMap = drafts;
    const apply = (person) => { const o = overrideMap[person.id] || {}; const editedImage = urls[person.id] ?? o.imageUrl; return { ...person, ...(editedImage ? { imageUrl: editedImage } : {}), ...(Array.isArray(o.acceptedAnswers) ? { acceptedAnswers: o.acceptedAnswers } : {}), ...(Array.isArray(o.hints) ? { hints: o.hints } : {}) }; };
    const newIds = new Set(newPeople.map(p => p.id));
    const basePeople = FAMOUS_PEOPLE.filter(p => !newIds.has(p.id)).map(apply);
    const updatedNewPeople = newPeople.map(apply);
    const peopleModule = `import { newPeople } from './people_new.js';\n\nexport const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};\n\nexport const FAMOUS_PEOPLE = ${JSON.stringify(basePeople, null, 2)}.concat(newPeople.map((person) => ({ ...person, category: person.category === 'music' ? 'singer' : person.category, imageSource: person.imageSource || 'Wikipedia / Wikimedia Commons' })));\n\nconst CATEGORY_MERGE = (category) => { if (category === 'president' || category === 'politician') return 'leader'; if (category === 'scientist' || category === 'history') return 'history'; if (category === 'music') return 'singer'; return category; };\nexport function getAllPeopleWithOverrides() { let overrides = {}; try { overrides = JSON.parse(localStorage.getItem('guesswho_people_overrides') || '{}'); } catch { overrides = {}; } let imageOverrides = {}; try { imageOverrides = JSON.parse(localStorage.getItem('guesswho_image_overrides') || '{}'); } catch {} const seen = new Set(); return FAMOUS_PEOPLE.map((p) => { const o = overrides[p.id] || {}; return { ...p, ...o, category: CATEGORY_MERGE(p.category), imageUrl: imageOverrides[p.id] ?? o.imageUrl ?? p.imageUrl, hints: Array.isArray(o.hints) ? o.hints : p.hints, acceptedAnswers: Array.isArray(o.acceptedAnswers) ? o.acceptedAnswers : p.acceptedAnswers }; }).filter((p) => { const key = String(p.name || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, ''); if (!key || seen.has(key)) return false; seen.add(key); return true; }); }\nexport function getGameQuestions(categoryId = 'all', count = 5) { let pool = getAllPeopleWithOverrides(); if (categoryId && categoryId !== 'all') pool = pool.filter((p) => p.category === CATEGORY_MERGE(categoryId)); for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; } return pool.slice(0, Math.min(count, pool.length)); }`;
    const download = (name, content) => { const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); };
    download('people.js', peopleModule);
    download('people_new.js', `export const newPeople = ${JSON.stringify(updatedNewPeople, null, 2)};\n`);
    setSavedMessage('File people.js dan people_new.js sedang diunduh. Ganti file di src/data/ setelah dicadangkan.');
  };
  const shown = people.filter(p => {
    const q = query.trim().toLowerCase();
    const matches = !q || `${p.name} ${p.category} ${p.nationality}`.toLowerCase().includes(q);
    const status = filter === 'all' || (filter === 'failed' && (failed[p.id] || (!p.imageUrl && !urls[p.id]))) || (filter === 'loaded' && loaded[p.id]);
    return matches && status;
  });
  const reset = (id) => { const next = {...urls}; delete next[id]; setUrls(next); setDrafts(prev => { const copy = { ...prev }; if (copy[id]) { delete copy[id].imageUrl; if (!copy[id].hints && !copy[id].acceptedAnswers) delete copy[id]; } return copy; }); };
  const exportFixes = () => {
    const blob = new Blob([JSON.stringify(urls, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='guesswho-image-overrides.json'; a.click(); URL.revokeObjectURL(url);
  };
  if (!authReady) return <div className="admin-auth-wrap"><div className="glass-panel admin-auth-card">Memeriksa akses admin...</div></div>;

  if (!isAdmin) return <div className="admin-auth-wrap"><form className="glass-panel admin-auth-card" onSubmit={handleLogin}>
    <div className="admin-auth-icon"><ShieldCheck size={28}/></div><h1>Login Admin</h1><p className="admin-muted">Halaman ini khusus admin GuessWho.</p>
    <label htmlFor="admin-email">Email admin</label><input id="admin-email" type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="admin@email.com" />
    <label htmlFor="admin-password">Password</label><input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="Password Firebase Auth" />
    {authError && <p className="admin-auth-error">{authError}</p>}
    {!auth && <p className="admin-auth-error">Firebase belum terkonfigurasi. Periksa file .env.local.</p>}
    {!adminEmails.length && <p className="admin-auth-error">Tambahkan VITE_ADMIN_EMAILS di .env.local terlebih dahulu.</p>}
    <button className="btn btn-primary admin-full" type="submit" disabled={authBusy || !auth || !adminEmails.length}><LogIn size={16}/>{authBusy ? 'Memproses...' : 'Masuk sebagai Admin'}</button>
    <button className="btn btn-secondary admin-full" type="button" onClick={()=>onNavigate('home')}><ArrowLeft size={16}/> Kembali</button>
  </form></div>;

  return <div className="container admin-images-page">
    <div className="admin-top-actions"><button className="btn btn-secondary" onClick={()=>onNavigate('home')}><ArrowLeft size={16}/> Kembali</button><button className="btn btn-secondary" onClick={async()=>{await signOut(auth); onNavigate('home');}}><LogOut size={16}/> Keluar Admin</button></div>
    <h1>Admin Debug Foto</h1>
    <p style={{color:'var(--text-secondary)'}}>Edit foto, accepted answers, dan hints. Perubahan disimpan ke Firebase agar dipakai semua perangkat. {cloudReady ? 'Sinkronisasi aktif.' : 'Menghubungkan ke Firebase...'}</p>
    <div className="admin-toolbar">
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari nama atau kategori" className="admin-search" />
      <select value={filter} onChange={e=>setFilter(e.target.value)} className="admin-filter"><option value="all">Semua foto</option><option value="failed">Gagal / URL kosong</option><option value="loaded">Berhasil dimuat</option></select>
      <button className="btn btn-primary" onClick={save} disabled={cloudBusy || !cloudReady}><Save size={16}/>{cloudBusy ? 'Menyimpan...' : 'Simpan semua'}</button><button className="btn btn-secondary" onClick={exportFiles}><Download size={16}/> Export people.js + people_new.js</button>
    </div>
    {savedMessage && <p>{savedMessage}</p>}
    <div className="admin-image-grid">
      {shown.map(p => { const url = urls[p.id] ?? p.imageUrl ?? ''; const handleAdminImageError = async () => {
        setLoaded(s=>({...s,[p.id]:false}));
        if (fallbackTried[p.id]) { setFailed(s=>({...s,[p.id]:true})); return; }
        setFallbackTried(s=>({...s,[p.id]:true}));
        const title = String(p.name || '').replace(/^(Ir\.?|Dr\.?|Prof\.?)\s*/i, '').trim();
        try {
          const endpoint = `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=thumbnail&pithumbsize=600&redirects=1&titles=${encodeURIComponent(title.replace(/ /g, '_'))}&origin=*`;
          const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
          const data = response.ok ? await response.json() : null;
          let fallbackUrl = data?.query?.pages?.[0]?.thumbnail?.source;
          if (!fallbackUrl) {
            const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(title)}&gsrnamespace=0&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=600&format=json&origin=*`;
            const searchResponse = await fetch(searchUrl, { headers: { Accept: 'application/json' } });
            const searchData = searchResponse.ok ? await searchResponse.json() : null;
            fallbackUrl = Object.values(searchData?.query?.pages || {})[0]?.thumbnail?.source;
          }
          if (fallbackUrl && fallbackUrl !== url) {
            // Set the discovered URL into the editable field so admin can save it to Firebase.
            setUrls(current => ({ ...current, [p.id]: fallbackUrl }));
            setFailed(current => ({ ...current, [p.id]: false }));
            setLoaded(current => ({ ...current, [p.id]: false }));
            return;
          }
        } catch (error) {
          console.warn(`[GuessWho Admin] Gagal mencari foto pengganti untuk ${p.name}:`, error);
        }
        setFailed(s=>({...s,[p.id]:true}));
      }; return <div key={p.id} className="glass-panel admin-image-card">
        <div style={{height:'180px', background:'#0f172a', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
          {url ? <img src={url} alt={p.name} onLoad={()=>{setLoaded(s=>({...s,[p.id]:true}));setFailed(s=>({...s,[p.id]:false}));}} onError={handleAdminImageError} style={{width:'100%',height:'100%',objectFit:'contain'}} /> : <span>URL foto kosong</span>}
        </div>
        <strong>{p.name}</strong><small>{p.category} · {p.nationality || 'Negara tidak tersedia'}</small>
        <small style={{color:failed[p.id] || !url ? '#fb7185' : loaded[p.id] ? '#34d399' : 'var(--text-secondary)'}}>{!url ? 'URL kosong' : failed[p.id] ? 'Gagal dimuat' : loaded[p.id] ? 'Berhasil dimuat' : 'Memeriksa gambar...'}</small>
        <input value={url} onChange={e=>setUrls(s=>({...s,[p.id]:e.target.value}))} placeholder="Tempel URL foto langsung" className="admin-url-input" />
        <label className="admin-field-label">Accepted answers (satu jawaban per baris)</label>
        <textarea className="admin-edit-textarea" value={(drafts[p.id]?.acceptedAnswers ?? p.acceptedAnswers ?? p.aliases ?? []).join('\n')} onChange={e=>updateDraft(p.id, 'acceptedAnswers', e.target.value.split('\n').map(v=>v.trim()).filter(Boolean))} rows={3} />
        <label className="admin-field-label">Hints (satu petunjuk per baris)</label>
        <textarea className="admin-edit-textarea" value={(drafts[p.id]?.hints ?? p.hints ?? []).join('\n')} onChange={e=>updateDraft(p.id, 'hints', e.target.value.split('\n').map(v=>v.trim()).filter(Boolean))} rows={3} />
        <div className="admin-card-actions"><button className="btn btn-primary" onClick={save}><Save size={14}/> Simpan</button><button className="btn btn-secondary" onClick={()=>reset(p.id)}><RotateCcw size={14}/> Reset</button>{url && <a className="btn btn-secondary" href={url} target="_blank" rel="noreferrer" title="Buka foto"><ExternalLink size={14}/></a>}</div>
      </div>})}
    </div>
    <small>Ditampilkan {shown.length} dari {people.length} tokoh. Deteksi berhasil dimuat tidak menjamin foto menggambarkan orang yang benar, jadi cek visualnya juga.</small>
  </div>;
}
