"use client";

import * as React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import styles from "@/app/page.module.css";

export function HeroHeading() {
  const [showName, setShowName] = React.useState(false);

  return (
    <div className={styles.heroTopPlain}>
      <p className={styles.heroGreeting}>
        Hi <span className={styles.hiEmoji}>👋</span>
      </p>
      <h1 className={styles.heroName}>
        <span className={styles.aquaWord}>
          <TypingAnimation speedMs={120} onComplete={() => setShowName(true)}>
            this is
          </TypingAnimation>
        </span>
        {showName ? " " : null}
        <span className={`${styles.bhavikaText} ${styles.bhavikaWord}`}>
          {showName ? (
            <TypingAnimation className={styles.bhavikaUnderline} speedMs={120}>
              Bhavika
            </TypingAnimation>
          ) : (
            <span className={styles.bhavikaUnderline} style={{ opacity: 0 }} aria-hidden="true">
              Bhavika
            </span>
          )}
        </span>
      </h1>
    </div>
  );
}
