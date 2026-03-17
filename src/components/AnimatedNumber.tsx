import { useEffect, useState, useRef } from "react";

export function AnimatedNumber({ value, prefix = "", suffix = "", duration = 800 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    const start = ref.current;
    const diff = value - start;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + diff * eased;
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(animate);
      else ref.current = value;
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  const formatted = display >= 1_000_000
    ? `${(display / 1_000_000).toFixed(1)}M`
    : display >= 1_000
    ? `${(display / 1_000).toFixed(0)}mil`
    : display.toFixed(0);

  return <span>{prefix}{formatted}{suffix}</span>;
}
