"use client";

import * as React from "react";

type TypingAnimationProps = {
  children: string;
  className?: string;
  /**
   * Milliseconds between each character.
   */
  speedMs?: number;
  /**
   * Show blinking cursor while typing and after completion.
   */
  cursor?: boolean;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function TypingAnimation({
  children,
  className,
  speedMs = 90,
  cursor = true,
}: TypingAnimationProps) {
  const text = String(children);
  const [length, setLength] = React.useState(0);

  React.useEffect(() => {
    if (prefersReducedMotion()) {
      setLength(text.length);
      return;
    }

    let frame: number | undefined;
    let cancelled = false;
    let current = 0;

    const tick = () => {
      if (cancelled) return;
      current += 1;
      setLength(current);
      if (current < text.length) {
        frame = window.setTimeout(tick, speedMs);
      }
    };

    setLength(0);
    frame = window.setTimeout(tick, speedMs);

    return () => {
      cancelled = true;
      if (frame) window.clearTimeout(frame);
    };
  }, [speedMs, text]);

  const shown = text.slice(0, length);

  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center" }}>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{text}</span>
      {cursor ? (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "0.6ch",
            marginLeft: "0.15ch",
            borderRight: "2px solid rgba(20, 21, 27, 0.55)",
            height: "0.95em",
            transform: "translateY(0.06em)",
            animation: prefersReducedMotion() ? undefined : "caretBlink 700ms step-end infinite",
          }}
        />
      ) : null}
      <style jsx global>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @keyframes caretBlink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}

