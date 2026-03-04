"use client";

import * as React from "react";
import styles from "./social-icon.module.css";

type SocialIconProps = {
  href: string;
  tooltip: string;
  className: string;
  ariaLabel: string;
};

export function SocialIcon({ href, tooltip, className, ariaLabel }: SocialIconProps) {
  const ref = React.useRef<HTMLAnchorElement | null>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <a
      ref={ref}
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      onClick={() => setOpen((v) => !v)}
    >
      <span
        className={`${styles.tooltip}${open ? ` ${styles.tooltipVisible}` : ""}`}
        aria-hidden="true"
      >
        {tooltip}
      </span>
    </a>
  );
}
