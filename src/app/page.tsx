import { MfaCounter, MfaDayOnly } from "@/components/mfa-counter";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { SocialIcon } from "@/components/social-icon";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { HeroHeading } from "@/components/hero-heading";
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
        <HeroHeading />

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
              at <span className={styles.highlightGreenPinkUnderline}>Micron</span>{" "}
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
              <span className={styles.aquaWordBold}>I</span>{" "}
              <span className={styles.highlightGreenPinkUnderline}>create content</span>{" "}
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
              <span
                className={`${styles.thoughtAnchor} ${styles.highlightGreenPinkUnderline}`}
                data-thought="in my head"
                tabIndex={0}
                title="in my head"
              >
                create things
              </span>
            </p>
            <p className={styles.heroIntro}>
              <span className={styles.aquaWordBold}>I</span> make{" "}
              <span className={styles.highlightGreenPinkUnderline}>playlists</span>{" "}
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
        <svg
          className={styles.footerScene}
          viewBox="0 0 800 130"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="0" y="96" width="800" height="34" fill="#7acc7a" opacity="0.5" rx="2" />
          <rect x="0" y="102" width="800" height="28" fill="#60bb60" opacity="0.28" />

          {/* very low grass */}
          <g opacity="0.35" stroke="#4f9f4f" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="128" x2="18" y2="121" />
            <line x1="34" y1="128" x2="32" y2="122" />
            <line x1="50" y1="128" x2="52" y2="120" />
            <line x1="72" y1="128" x2="71" y2="123" />
            <line x1="92" y1="128" x2="94" y2="121" />
            <line x1="118" y1="128" x2="117" y2="122" />
            <line x1="142" y1="128" x2="144" y2="120" />
            <line x1="168" y1="128" x2="167" y2="123" />
            <line x1="194" y1="128" x2="196" y2="121" />
            <line x1="222" y1="128" x2="221" y2="122" />
            <line x1="248" y1="128" x2="250" y2="120" />
            <line x1="276" y1="128" x2="275" y2="123" />
            <line x1="304" y1="128" x2="306" y2="121" />
            <line x1="332" y1="128" x2="331" y2="122" />
            <line x1="360" y1="128" x2="362" y2="120" />
            <line x1="392" y1="128" x2="391" y2="123" />
            <line x1="420" y1="128" x2="422" y2="121" />
            <line x1="452" y1="128" x2="451" y2="122" />
            <line x1="484" y1="128" x2="486" y2="120" />
            <line x1="516" y1="128" x2="515" y2="123" />
            <line x1="548" y1="128" x2="550" y2="121" />
            <line x1="580" y1="128" x2="579" y2="122" />
            <line x1="612" y1="128" x2="614" y2="120" />
            <line x1="644" y1="128" x2="643" y2="123" />
            <line x1="676" y1="128" x2="678" y2="121" />
            <line x1="708" y1="128" x2="707" y2="122" />
            <line x1="740" y1="128" x2="742" y2="120" />
            <line x1="770" y1="128" x2="769" y2="123" />
            <line x1="792" y1="128" x2="794" y2="121" />
          </g>

          <g className={styles.t1}>
            <g transform="translate(59,98) scale(0.88) translate(-59,-98)">
              <rect x="54" y="68" width="10" height="30" fill="#6b4a1e" rx="2" opacity="0.9" />
              <ellipse cx="59" cy="80" rx="30" ry="16" fill="#2d7a28" opacity="0.55" />
              <ellipse cx="59" cy="64" rx="26" ry="21" fill="#3a9032" opacity="0.82" />
              <ellipse cx="59" cy="49" rx="21" ry="20" fill="#4aaa3a" opacity="0.9" />
              <ellipse cx="59" cy="36" rx="14" ry="14" fill="#6acc50" opacity="0.78" />
            </g>
          </g>

          <g className={styles.t2}>
            <g transform="translate(188,98) scale(0.88) translate(-188,-98)">
              <rect x="183" y="60" width="11" height="38" fill="#6b4a1e" rx="2" opacity="0.9" />
              <ellipse cx="188" cy="72" rx="32" ry="17" fill="#4a9830" opacity="0.5" />
              <ellipse cx="188" cy="56" rx="28" ry="22" fill="#5aaa3a" opacity="0.82" />
              <ellipse cx="188" cy="40" rx="22" ry="21" fill="#78cc50" opacity="0.9" />
              <ellipse cx="188" cy="26" rx="15" ry="14" fill="#a0e870" opacity="0.78" />
            </g>
          </g>

          <g className={styles.t3}>
            <g transform="translate(385,98) scale(0.86) translate(-385,-98)">
              <rect x="379" y="55" width="12" height="43" fill="#6b4a1e" rx="2" opacity="0.9" />
              <ellipse cx="385" cy="70" rx="36" ry="18" fill="#3a7040" opacity="0.5" />
              <ellipse cx="385" cy="53" rx="31" ry="24" fill="#4a8850" opacity="0.82" />
              <ellipse cx="385" cy="36" rx="25" ry="22" fill="#60a865" opacity="0.9" />
              <ellipse cx="385" cy="21" rx="17" ry="15" fill="#88cc88" opacity="0.78" />
            </g>
          </g>

          <g className={styles.t4}>
            <g transform="translate(554,98) scale(0.88) translate(-554,-98)">
              <rect x="549" y="62" width="10" height="36" fill="#6b4a1e" rx="2" opacity="0.9" />
              <ellipse cx="554" cy="75" rx="30" ry="16" fill="#5a9820" opacity="0.5" />
              <ellipse cx="554" cy="60" rx="26" ry="21" fill="#6ab028" opacity="0.82" />
              <ellipse cx="554" cy="45" rx="21" ry="20" fill="#8acc40" opacity="0.9" />
              <ellipse cx="554" cy="32" rx="14" ry="14" fill="#b0e860" opacity="0.78" />
            </g>
          </g>

          <g className={styles.t5}>
            <g transform="translate(718,98) scale(0.88) translate(-718,-98)">
              <rect x="713" y="58" width="11" height="40" fill="#6b4a1e" rx="2" opacity="0.9" />
              <ellipse cx="718" cy="72" rx="33" ry="17" fill="#1e5c30" opacity="0.5" />
              <ellipse cx="718" cy="56" rx="29" ry="22" fill="#287040" opacity="0.82" />
              <ellipse cx="718" cy="40" rx="23" ry="21" fill="#388a50" opacity="0.9" />
              <ellipse cx="718" cy="26" rx="16" ry="14" fill="#58b068" opacity="0.78" />
            </g>
          </g>

          <g className={styles.f1}>
            <line x1="120" y1="96" x2="120" y2="68" stroke="#5aaa60" strokeWidth="2.5" />
            <ellipse
              cx="112"
              cy="82"
              rx="9"
              ry="4"
              fill="#6abb60"
              opacity="0.8"
              transform="rotate(-30,112,82)"
            />
            <circle cx="120" cy="62" r="7.5" fill="#f07aa0" opacity="0.95" />
            <circle cx="112" cy="65" r="5.5" fill="#fbaabf" opacity="0.8" />
            <circle cx="128" cy="65" r="5.5" fill="#fbaabf" opacity="0.8" />
            <circle cx="120" cy="55" r="5.5" fill="#fbaabf" opacity="0.7" />
            <circle cx="113" cy="57" r="4.5" fill="#fdc8d8" opacity="0.6" />
            <circle cx="127" cy="57" r="4.5" fill="#fdc8d8" opacity="0.6" />
            <circle cx="120" cy="62" r="3.5" fill="#fff5c0" />
          </g>

          <g className={styles.f2}>
            <line x1="290" y1="96" x2="290" y2="70" stroke="#5aaa60" strokeWidth="2.2" />
            <ellipse
              cx="298"
              cy="84"
              rx="9"
              ry="4"
              fill="#6abb60"
              opacity="0.8"
              transform="rotate(30,298,84)"
            />
            <circle cx="290" cy="64" r="7" fill="#f9d84a" opacity="0.95" />
            <circle cx="283" cy="67" r="5" fill="#fce98a" opacity="0.8" />
            <circle cx="297" cy="67" r="5" fill="#fce98a" opacity="0.8" />
            <circle cx="290" cy="57" r="5" fill="#fce98a" opacity="0.7" />
            <circle cx="283" cy="59" r="4" fill="#fef4b0" opacity="0.6" />
            <circle cx="297" cy="59" r="4" fill="#fef4b0" opacity="0.6" />
            <circle cx="290" cy="64" r="3" fill="#ffffff" />
          </g>

          <g className={styles.f3}>
            <line x1="470" y1="96" x2="470" y2="68" stroke="#5aaa60" strokeWidth="2.5" />
            <ellipse
              cx="462"
              cy="82"
              rx="9"
              ry="4"
              fill="#6abb60"
              opacity="0.8"
              transform="rotate(-30,462,82)"
            />
            <circle cx="470" cy="62" r="7.5" fill="#4dd9c0" opacity="0.95" />
            <circle cx="462" cy="65" r="5.5" fill="#88ece0" opacity="0.8" />
            <circle cx="478" cy="65" r="5.5" fill="#88ece0" opacity="0.8" />
            <circle cx="470" cy="55" r="5.5" fill="#88ece0" opacity="0.7" />
            <circle cx="463" cy="57" r="4.5" fill="#b8f4ec" opacity="0.6" />
            <circle cx="477" cy="57" r="4.5" fill="#b8f4ec" opacity="0.6" />
            <circle cx="470" cy="62" r="3.5" fill="#ffffff" />
          </g>

          <g className={styles.f4}>
            <line x1="632" y1="96" x2="632" y2="74" stroke="#5aaa60" strokeWidth="2" />
            <ellipse
              cx="640"
              cy="86"
              rx="9"
              ry="4"
              fill="#6abb60"
              opacity="0.8"
              transform="rotate(30,640,86)"
            />
            <circle cx="632" cy="68" r="6.5" fill="#fbaabf" opacity="0.95" />
            <circle cx="625" cy="71" r="5" fill="#fdd8e8" opacity="0.8" />
            <circle cx="639" cy="71" r="5" fill="#fdd8e8" opacity="0.8" />
            <circle cx="632" cy="61" r="5" fill="#fdd8e8" opacity="0.7" />
            <circle cx="625" cy="63" r="4" fill="#fee8f0" opacity="0.6" />
            <circle cx="639" cy="63" r="4" fill="#fee8f0" opacity="0.6" />
            <circle cx="632" cy="68" r="2.8" fill="#fff5c0" />
          </g>

          <g className={styles.f5}>
            <line x1="335" y1="96" x2="335" y2="68" stroke="#5aaa60" strokeWidth="2.5" />
            <ellipse
              cx="343"
              cy="83"
              rx="9"
              ry="4"
              fill="#6abb60"
              opacity="0.8"
              transform="rotate(30,343,83)"
            />
            <circle cx="335" cy="62" r="7.5" fill="#c8a8e8" opacity="0.95" />
            <circle cx="327" cy="65" r="5.5" fill="#dcc8f4" opacity="0.8" />
            <circle cx="343" cy="65" r="5.5" fill="#dcc8f4" opacity="0.8" />
            <circle cx="335" cy="55" r="5.5" fill="#dcc8f4" opacity="0.7" />
            <circle cx="328" cy="57" r="4.5" fill="#ece0f8" opacity="0.6" />
            <circle cx="342" cy="57" r="4.5" fill="#ece0f8" opacity="0.6" />
            <circle cx="335" cy="62" r="3.5" fill="#fff5c0" />
          </g>

          {/* Smaller extra flowers */}
          <g className={styles.f6}>
            <g transform="translate(210,96) scale(0.72) translate(-210,-96)">
              <line x1="210" y1="96" x2="210" y2="70" stroke="#5aaa60" strokeWidth="2.2" />
              <circle cx="210" cy="64" r="7" fill="#4dd9c0" opacity="0.95" />
              <circle cx="203" cy="67" r="5" fill="#88ece0" opacity="0.8" />
              <circle cx="217" cy="67" r="5" fill="#88ece0" opacity="0.8" />
              <circle cx="210" cy="57" r="5" fill="#88ece0" opacity="0.7" />
              <circle cx="210" cy="64" r="3" fill="#ffffff" />
            </g>
          </g>

          <g className={styles.f7}>
            <g transform="translate(520,96) scale(0.68) translate(-520,-96)">
              <line x1="520" y1="96" x2="520" y2="70" stroke="#5aaa60" strokeWidth="2.2" />
              <circle cx="520" cy="64" r="7" fill="#f07aa0" opacity="0.95" />
              <circle cx="513" cy="67" r="5" fill="#fbaabf" opacity="0.8" />
              <circle cx="527" cy="67" r="5" fill="#fbaabf" opacity="0.8" />
              <circle cx="520" cy="57" r="5" fill="#fbaabf" opacity="0.7" />
              <circle cx="520" cy="64" r="3" fill="#fff5c0" />
            </g>
          </g>

          <g className={styles.f8}>
            <g transform="translate(580,96) scale(0.7) translate(-580,-96)">
              <line x1="580" y1="96" x2="580" y2="70" stroke="#5aaa60" strokeWidth="2.2" />
              <circle cx="580" cy="64" r="7" fill="#f9d84a" opacity="0.95" />
              <circle cx="573" cy="67" r="5" fill="#fce98a" opacity="0.8" />
              <circle cx="587" cy="67" r="5" fill="#fce98a" opacity="0.8" />
              <circle cx="580" cy="57" r="5" fill="#fce98a" opacity="0.7" />
              <circle cx="580" cy="64" r="3" fill="#ffffff" />
            </g>
          </g>

          <g className={styles.f9}>
            <g transform="translate(720,96) scale(0.66) translate(-720,-96)">
              <line x1="720" y1="96" x2="720" y2="70" stroke="#5aaa60" strokeWidth="2.2" />
              <circle cx="720" cy="64" r="7" fill="#c8a8e8" opacity="0.95" />
              <circle cx="713" cy="67" r="5" fill="#dcc8f4" opacity="0.8" />
              <circle cx="727" cy="67" r="5" fill="#dcc8f4" opacity="0.8" />
              <circle cx="720" cy="57" r="5" fill="#dcc8f4" opacity="0.7" />
              <circle cx="720" cy="64" r="3" fill="#fff5c0" />
            </g>
          </g>

          <g className={styles.f10}>
            <g transform="translate(60,96) scale(0.64) translate(-60,-96)">
              <line x1="60" y1="96" x2="60" y2="70" stroke="#5aaa60" strokeWidth="2.2" />
              <circle cx="60" cy="64" r="7" fill="#fbaabf" opacity="0.95" />
              <circle cx="53" cy="67" r="5" fill="#fdd8e8" opacity="0.8" />
              <circle cx="67" cy="67" r="5" fill="#fdd8e8" opacity="0.8" />
              <circle cx="60" cy="57" r="5" fill="#fdd8e8" opacity="0.7" />
              <circle cx="60" cy="64" r="3" fill="#fff5c0" />
            </g>
          </g>
        </svg>

        <div className={styles.footerBar}>
          <nav className={styles.footerLinks} aria-label="Footer links">
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
          </nav>
          <p className={styles.footerEmail}>
            Want to say hi? <a href={LINKS.email}>bhavikajandi02@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
