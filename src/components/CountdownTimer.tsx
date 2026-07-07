"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "np_sale_deadline";
const DURATION_MS = 20 * 60 * 1000;

function getDeadline(): number {
  const now = Date.now();
  const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "", 10);
  let deadline = Number.isFinite(stored) ? stored : null;
  if (!deadline || deadline < now) {
    deadline = now + DURATION_MS;
    try {
      localStorage.setItem(STORAGE_KEY, String(deadline));
    } catch {
      // ignore storage errors (private mode, quota, etc.)
    }
  }
  return deadline;
}

function formatRemaining(deadline: number): string {
  const remaining = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function CountdownTimer({ className = "" }: { className?: string }) {
  const [label, setLabel] = useState("20:00");

  useEffect(() => {
    const deadline = getDeadline();
    const id = setInterval(() => setLabel(formatRemaining(deadline)), 1000);
    return () => clearInterval(id);
  }, []);

  return <span className={className}>{label}</span>;
}
