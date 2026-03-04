"use client";

import * as React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import styles from "@/app/page.module.css";

type TypedHeadlineProps = {
  text: string;
  speedMs?: number;
};

export function TypedHeadline({ text, speedMs = 140 }: TypedHeadlineProps) {
  return (
    <h1 className={styles.heroName}>
      <TypingAnimation speedMs={speedMs}>{text}</TypingAnimation>
    </h1>
  );
}
