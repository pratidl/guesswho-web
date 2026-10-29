import { useEffect, useRef, useState } from 'react';
import { soundService } from '../services/soundService.js';

/**
 * Timer berbasis timestamp supaya tidak bergantung pada frekuensi render React.
 * resetKey dipakai untuk mengatur ulang timer pada setiap ronde.
 */
export function useGameTimer({
  duration = 30,
  isActive = true,
  isRevealed = false,
  roundStartTime = null,
  roundEndTime = null,
  resetKey = 0,
  onTimeUp = () => {},
  totalHints = 3
}) {
  const [remainingTime, setRemainingTime] = useState(duration);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timeUpCalledRef = useRef(false);
  const onTimeUpRef = useRef(onTimeUp);
  const prevRemainingRef = useRef(duration);

  // Keep the latest callback without restarting the interval on every render.
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    timeUpCalledRef.current = false;
    prevRemainingRef.current = duration;
    setRemainingTime(duration);
    setElapsedTime(0);
  }, [resetKey, duration]);

  useEffect(() => {
    if (!isActive || isRevealed) return undefined;

    // Multiplayer uses a shared server timestamp. Solo mode starts locally.
    const startAt = Number.isFinite(roundStartTime) && roundStartTime > 0
      ? roundStartTime
      : Date.now();
    const endAt = Number.isFinite(roundEndTime) && roundEndTime > 0
      ? roundEndTime
      : startAt + duration * 1000;

    const updateTimer = () => {
      const now = Date.now();
      const left = Math.max(0, Math.min(duration, Math.ceil((endAt - now) / 1000)));
      const elapsed = Math.max(0, Math.min(duration, Math.floor((now - startAt) / 1000)));

      setRemainingTime(left);
      setElapsedTime(elapsed);

      if (left <= 5 && left > 0 && left !== prevRemainingRef.current) {
        soundService.playTick();
      }
      prevRemainingRef.current = left;

      if (left <= 0 && !timeUpCalledRef.current) {
        timeUpCalledRef.current = true;
        onTimeUpRef.current?.();
      }
    };

    // Render the correct initial value immediately, then update 4 times/second.
    updateTimer();
    const intervalId = window.setInterval(updateTimer, 200);
    return () => window.clearInterval(intervalId);
  }, [isActive, isRevealed, duration, roundStartTime, roundEndTime, resetKey]);

  const progress = duration > 0 ? remainingTime / duration : 0;
  const blurProgress = duration > 0 ? Math.min(1, Math.max(0, elapsedTime / duration)) : 1;
  const blurAmount = isRevealed
    ? 0
    : Math.max(0, Math.round(26 * Math.pow(1 - blurProgress, 1.4) * 10) / 10);

  let activeHintCount = 0;
  if (isRevealed) {
    activeHintCount = totalHints;
  } else {
    if (elapsedTime >= 8) activeHintCount = 1;
    if (elapsedTime >= 15) activeHintCount = 2;
    if (elapsedTime >= 22) activeHintCount = 3;
  }

  return {
    remainingTime,
    elapsedTime,
    blurAmount,
    activeHintCount,
    progressPercentage: Math.max(0, Math.min(100, progress * 100))
  };
}
