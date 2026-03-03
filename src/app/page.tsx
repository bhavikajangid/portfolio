import { TypingAnimation } from "@/components/magicui/typing-animation";
import { MfaCounter, MfaDayOnly } from "@/components/mfa-counter";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import styles from "./page.module.css";

const LINKS = {
  x: "https://x.com/bhavika_jangid_",
  xStatus: "https://x.com/bhavika_jangid_/status/2028475263378735545?s=20",
  instagram: "https://www.instagram.com/bhavarchive",
  youtube: "https://www.youtube.com/@bhavikajangid1",
  substack: "https://bhavikajangid.substack.com/",
  notion: "#",
  micron: "https://www.linkedin.com/in/bhavika-jangid/",
  email: "mailto:bhavikajandi02@gmail.com",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <p className={styles.heroGreeting}>Hi 👋</p>
        <h1 className={styles.heroName}>
          <TypingAnimation speedMs={140}>this is Bhavika</TypingAnimation>
        </h1>

        <p className={styles.heroIntro}>
          I&apos;m a software engineer{" "}
          <a className={styles.inlineChip} href={LINKS.micron} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            @Micron
          </a>
          ,
        </p>
        <p className={styles.heroIntro}>
          I write{" "}
          <a className={styles.inlineChip} href={LINKS.substack} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="#FF6719">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
            Substack
          </a>
          ,
        </p>
        <p className={styles.heroIntro}>
          create content{" "}
          <a className={styles.inlineChip} href={LINKS.instagram} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <defs>
                <radialGradient id="ig" cx="30%" cy="107%" r="150%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="5%" stopColor="#fdf497" />
                  <stop offset="45%" stopColor="#fd5949" />
                  <stop offset="60%" stopColor="#d6249f" />
                  <stop offset="90%" stopColor="#285AEB" />
                </radialGradient>
              </defs>
              <rect width="24" height="24" rx="5" fill="url(#ig)" />
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="4"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
            </svg>
            bhavarchive
          </a>{" "}
          <a className={styles.inlineChip} href={LINKS.youtube} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="#FF0000" width="16" height="16">
              <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
            </svg>
            YouTube
          </a>{" "}
          <a className={styles.inlineChip} href={LINKS.x} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="#111111" width="16" height="16">
              <path d="M18.9 4.5h-2.6l-4 5.1-4.5-5.1H5.1l5.9 6.8L5 19.5h2.6l4.7-5.9 5.1 5.9h2.6l-6.6-7.6 5.5-7.4Z" />
            </svg>
            X
          </a>
          ,
        </p>
        <p className={styles.heroIntro}>
          build on the side{" "}
          <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic" }}>
            — coming soon
          </span>
        </p>
      </section>

      <hr className={styles.divider} />

      <div className={styles.topSections}>
        <div className={styles.mfaCard}>
          <p className={styles.mfaLabel}>Master of Figure-It-Out Alone</p>
          <MfaCounter startDate="2026-03-02" totalDays={90} xHref={LINKS.xStatus} />
          <div className={styles.mfaActions}>
            <a className={styles.mfaLink} href={LINKS.xStatus} target="_blank" rel="noreferrer">
              Follow along on X →
            </a>
            <a className={styles.mfaLinkNotion} href={LINKS.notion} target="_blank" rel="noreferrer">
              📓 Learnings in Notion →
            </a>
          </div>
        </div>

        <section>
          <h2 className={styles.sectionTitle}>Now</h2>
          <div className={styles.nowGrid}>
            <div className={styles.nowRow}>
              <span className={styles.nowLabel}>building</span>
              <span className={styles.nowValue}>this portfolio</span>
            </div>
            <div className={styles.nowRow}>
              <span className={styles.nowLabel}>learning</span>
              <span className={styles.nowValue}>it&apos;s ok to be multidisciplinary</span>
            </div>
            <div className={styles.nowRow}>
              <span className={styles.nowLabel}>writing</span>
              <span className={styles.nowValue}>on Substack</span>
            </div>
            <div className={styles.nowRow}>
              <span className={styles.nowLabel}>reading</span>
              <span className={styles.nowValue}>How to Be Everything — Emilie Wapnick</span>
            </div>
            <div className={styles.nowRow}>
              <span className={styles.nowLabel}>day</span>
              <span className={styles.nowValue}>
                <MfaDayOnly startDate="2026-03-02" totalDays={90} />
              </span>
            </div>
          </div>
        </section>
      </div>

      <hr className={styles.divider} />

      <PortfolioTabs />

      <hr className={styles.divider} />

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href={LINKS.x} target="_blank" rel="noreferrer">
            X
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer">
            bhavarchive
          </a>
          <a href={LINKS.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href={LINKS.substack} target="_blank" rel="noreferrer">
            Substack
          </a>
        </div>
        <p className={styles.footerHi}>
          Want to say hi? <a href={LINKS.email}>bhavikajandi02@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
