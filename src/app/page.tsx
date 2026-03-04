import { MfaCounter, MfaDayOnly } from "@/components/mfa-counter";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { SocialIcon } from "@/components/social-icon";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import styles from "./page.module.css";

const LINKS = {
  x: "https://x.com/bhavika_jangid_",
  xStatus: "https://x.com/bhavika_jangid_/status/2028475263378735545?s=20",
  instagram: "https://www.instagram.com/bhavarchive",
  youtube: "https://www.youtube.com/@bhavikajangid1",
  substack: "https://bhavikajangid.substack.com/",
  spotify:
    "https://open.spotify.com/user/n32ykesuzv8yy3s0ryt2jhvao?si=4083d7e06ff34ede",
  notion: "https://www.notion.so/90-Day-MFA-31916729b68f803584f8f869bffab190?source=copy_link",
  micron: "https://www.linkedin.com/in/bhavika-jangid/",
  email: "mailto:bhavikajandi02@gmail.com",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={`${styles.heroCard} ${styles.heroCardTopGradient}`}>
          <div className={styles.heroTop}>
            <p className={styles.heroGreeting}>Hi 👋</p>
            <h1 className={styles.heroName}>
              <span className={styles.aquaWord}>this is </span>
              <span className={`${styles.pinkWord} ${styles.bhavikaWord}`}>
                <TypingAnimation speedMs={120}>Bhavika</TypingAnimation>
              </span>
            </h1>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.heroBody}>
            <p className={styles.heroIntro}>
              <span className={styles.aquaWordBold}>I</span> am a{" "}
              <span
                className={`${styles.thoughtAnchor} ${styles.thoughtAnchorTop}`}
                data-thought="probably a personality hire"
                tabIndex={0}
                title="probably a personality hire"
              >
                software engineer
              </span>{" "}
              at <span className={`${styles.pinkWord} ${styles.wordBold}`}>Micron</span>{" "}
              <SocialIcon
                className={`${styles.imageIconLink} ${styles.linkedinChip}`}
                href={LINKS.micron}
                ariaLabel="LinkedIn"
                tooltip="bhavika-jangid"
              />
              .
            </p>
            <p className={`${styles.heroIntro} ${styles.heroRow}`}>
              <span className={styles.heroRowText}>
                <span className={styles.aquaWordBold}>I</span>{" "}
                <a className={styles.writeLink} href={LINKS.substack} target="_blank" rel="noreferrer">
                  <TypingAnimation speedMs={120}>write</TypingAnimation>
                </a>
                .
              </span>
            </p>
            <p className={styles.heroIntro}>
              <span className={styles.aquaWordBold}>I</span> create content{" "}
              <span className={styles.iconStack} aria-label="Platforms">
                <SocialIcon
                  className={`${styles.iconStackItem} ${styles.iconInstagram}`}
                  href={LINKS.instagram}
                  ariaLabel="Instagram"
                  tooltip="@bhavarchive"
                />
                <SocialIcon
                  className={`${styles.iconStackItem} ${styles.iconYoutube}`}
                  href={LINKS.youtube}
                  ariaLabel="YouTube"
                  tooltip="@bhavikajangid1"
                />
                <SocialIcon
                  className={`${styles.iconStackItem} ${styles.iconX}`}
                  href={LINKS.x}
                  ariaLabel="X"
                  tooltip="@bhavika_jangid_"
                />
              </span>
              .
            </p>
            <p className={styles.heroIntro}>
              <span className={styles.aquaWordBold}>I</span> like to{" "}
              <span className={styles.thoughtAnchor} data-thought="in my head" tabIndex={0} title="in my head">
                create things
              </span>
            </p>
            <p className={styles.heroIntro}>
              <span className={styles.aquaWordBold}>I</span> make good playlists{" "}
              <SocialIcon
                className={`${styles.imageIconLink} ${styles.spotifyChip}`}
                href={LINKS.spotify}
                ariaLabel="Spotify"
                tooltip="playlists"
              />
              .
            </p>
          </div>
        </div>
      </section>

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

        <section className={styles.nowCard}>
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
