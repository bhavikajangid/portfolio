"use client";

import * as React from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function BackgroundMedia() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = React.useState(true);
  const [motionReduced, setMotionReduced] = React.useState(false);

  React.useEffect(() => {
    const reduced = prefersReducedMotion();
    setMotionReduced(reduced);
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
  }, [muted]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (motionReduced) return;
    // Try to start playback (will succeed when muted).
    void video.play().catch(() => {});
  }, [motionReduced]);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    setMuted(nextMuted);
    video.muted = nextMuted;
    if (!nextMuted) {
      try {
        await video.play();
      } catch {
        // Autoplay with sound can be blocked; user can click again after interaction.
      }
    }
  };

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        {!motionReduced ? (
          <video
            ref={videoRef}
            className="site-bg__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/bg.png"
          >
            <source src="/assets/bg.mp4" type="video/mp4" />
          </video>
        ) : null}
      </div>

      {!motionReduced ? (
        <div className="site-bg-controls">
          <button
            type="button"
            className="site-bg__sound"
            onClick={toggleSound}
            aria-pressed={!muted}
            aria-label={muted ? "Turn sound on" : "Turn sound off"}
            title={muted ? "Turn sound on" : "Turn sound off"}
          >
            <img
              className="site-bg__soundIcon"
              src={muted ? "/assets/sound-off.png" : "/assets/sound-on.png"}
              alt=""
              aria-hidden="true"
              draggable={false}
            />
          </button>
        </div>
      ) : null}
    </>
  );
}
