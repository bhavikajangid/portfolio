"use client";

import * as React from "react";
import styles from "@/app/page.module.css";

type MfaCounterProps = {
  startDate: string; // YYYY-MM-DD (local)
  totalDays: number;
  xHref?: string;
};

function parseLocalDate(yyyyMmDd: string) {
  const [y, m, d] = yyyyMmDd.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setHours(0, 0, 0, 0);
  return date;
}

function computeDay(startDate: string, totalDays: number) {
  const start = parseLocalDate(startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayRaw = Math.floor((today.getTime() - start.getTime()) / 86400000) + 1;
  const day = Math.min(Math.max(dayRaw, 1), totalDays);
  const pct = Math.round((day / totalDays) * 100);
  return { day, pct };
}

export function MfaCounter({ startDate, totalDays }: MfaCounterProps) {
  const [{ day, pct }, setState] = React.useState(() => computeDay(startDate, totalDays));

  React.useEffect(() => {
    setState(computeDay(startDate, totalDays));
    const interval = window.setInterval(() => {
      setState(computeDay(startDate, totalDays));
    }, 60_000);
    return () => window.clearInterval(interval);
  }, [startDate, totalDays]);

  return (
    <>
      <div className={styles.mfaCounter}>{`Day ${day} of ${totalDays}`}</div>
      <p className={styles.mfaSub}>Posting every day. Figuring out my direction in public.</p>
      <div className={styles.mfaProgress}>
        <div className={styles.mfaFill} style={{ width: `${pct}%` }} />
      </div>
      <p className={styles.mfaProgressLabel}>{`${pct}% through the ${totalDays} days`}</p>
    </>
  );
}

export function MfaDayOnly({ startDate, totalDays }: Pick<MfaCounterProps, "startDate" | "totalDays">) {
  const [{ day }, setState] = React.useState(() => computeDay(startDate, totalDays));

  React.useEffect(() => {
    setState(computeDay(startDate, totalDays));
    const interval = window.setInterval(() => {
      setState(computeDay(startDate, totalDays));
    }, 60_000);
    return () => window.clearInterval(interval);
  }, [startDate, totalDays]);

  return <>{`${day} of the MFA`}</>;
}
