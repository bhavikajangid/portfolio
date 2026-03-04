"use client";

import * as React from "react";

export function BackgroundMedia() {
  const [theme, setTheme] = React.useState<"day" | "night">("night");

  const stars = React.useMemo(() => {
    return Array.from({ length: 60 }, () => {
      const size = Math.random() * 2 + 0.8;
      return {
        size,
        top: Math.random() * 70,
        left: Math.random() * 100,
        dur: (Math.random() * 3 + 2).toFixed(1),
        delay: (Math.random() * 3).toFixed(1),
      };
    });
  }, []);

  React.useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const next: "day" | "night" = saved === "day" ? "day" : "night";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const toggleTheme = () => {
    const next = theme === "day" ? "night" : "day";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  };

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <div className="site-bg__stars">
          {stars.map((s, i) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="site-bg__star"
              style={{
                width: `${s.size}px`,
                height: `${s.size}px`,
                top: `${s.top}%`,
                left: `${s.left}%`,
                // @ts-expect-error CSS var for animation duration.
                ["--dur"]: `${s.dur}s`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>
        <div className="site-bg__sun" />
        <div className="site-bg__moon" />

        <svg
          className="site-bg__cloudsBack"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="cloud-float-1">
            <ellipse cx="130" cy="90" rx="100" ry="44" fill="var(--cloud-back-fill)" opacity="0.82" />
            <ellipse cx="96" cy="106" rx="64" ry="34" fill="var(--cloud-back-hl)" opacity="0.88" />
            <ellipse cx="172" cy="102" rx="72" ry="30" fill="var(--cloud-back-hl)" opacity="0.82" />
            <ellipse cx="130" cy="114" rx="92" ry="24" fill="var(--cloud-back-sh)" opacity="0.35" />
          </g>
          <g className="cloud-float-2">
            <ellipse cx="630" cy="70" rx="88" ry="38" fill="var(--cloud-back-fill)" opacity="0.75" />
            <ellipse cx="600" cy="84" rx="56" ry="28" fill="var(--cloud-back-hl)" opacity="0.8" />
            <ellipse cx="664" cy="80" rx="62" ry="26" fill="var(--cloud-back-hl)" opacity="0.75" />
          </g>
          <g className="cloud-float-3">
            <ellipse cx="400" cy="45" rx="70" ry="28" fill="var(--cloud-back-fill)" opacity="0.55" />
            <ellipse cx="378" cy="56" rx="44" ry="20" fill="var(--cloud-back-hl)" opacity="0.6" />
            <ellipse cx="426" cy="53" rx="48" ry="19" fill="var(--cloud-back-hl)" opacity="0.55" />
          </g>
        </svg>

        <svg
          className="site-bg__cloudsFront"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="cloud-float-2">
            <ellipse cx="680" cy="200" rx="78" ry="34" fill="var(--cloud-front-fill)" opacity="0.88" />
            <ellipse cx="654" cy="214" rx="50" ry="26" fill="var(--cloud-front-hl)" opacity="0.92" />
            <ellipse cx="712" cy="210" rx="56" ry="24" fill="var(--cloud-front-hl)" opacity="0.88" />
            <ellipse cx="680" cy="218" rx="70" ry="18" fill="var(--cloud-front-sh)" opacity="0.35" />
          </g>
          <g className="cloud-float-3">
            <ellipse cx="60" cy="300" rx="66" ry="28" fill="var(--cloud-front-fill)" opacity="0.8" />
            <ellipse cx="36" cy="312" rx="42" ry="22" fill="var(--cloud-front-hl)" opacity="0.85" />
            <ellipse cx="88" cy="308" rx="48" ry="20" fill="var(--cloud-front-hl)" opacity="0.8" />
          </g>
          <g className="cloud-float-1">
            <ellipse cx="750" cy="380" rx="72" ry="30" fill="var(--cloud-front-fill)" opacity="0.72" />
            <ellipse cx="725" cy="392" rx="46" ry="22" fill="var(--cloud-front-hl)" opacity="0.78" />
            <ellipse cx="778" cy="390" rx="52" ry="20" fill="var(--cloud-front-hl)" opacity="0.72" />
          </g>
        </svg>
      </div>

      <div className="site-bg-controls">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === "day" ? "Switch to night theme" : "Switch to day theme"}
        >
          <span className="theme-toggle__day" aria-hidden="true">
            ☀️
          </span>
          <span className="theme-toggle__night" aria-hidden="true">
            🌙
          </span>
        </button>
      </div>
    </>
  );
}
