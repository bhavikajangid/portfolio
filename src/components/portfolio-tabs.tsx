"use client";

import * as React from "react";
import styles from "./portfolio-tabs.module.css";

const SUBSTACK_LINKS = {
  essay1: "https://bhavikajangid.substack.com/p/what-happens-when-you-stop-thinking",
  essay2: "https://bhavikajangid.substack.com/p/what-two-years-of-living-alone-taught",
  substack: "https://bhavikajangid.substack.com/",
};

type TabId = "experience" | "projects" | "writing";

export function PortfolioTabs() {
  const [active, setActive] = React.useState<TabId>("experience");

  return (
    <section className={styles.tabsWrap}>
      <div className={styles.tabsBar}>
        <button
          className={`${styles.tabBtn} ${active === "experience" ? styles.tabBtnActive : ""}`}
          type="button"
          onClick={() => setActive("experience")}
        >
          Experience
        </button>
        <button
          className={`${styles.tabBtn} ${active === "projects" ? styles.tabBtnActive : ""}`}
          type="button"
          onClick={() => setActive("projects")}
        >
          Things I&apos;ve Made
        </button>
        <button
          className={`${styles.tabBtn} ${active === "writing" ? styles.tabBtnActive : ""}`}
          type="button"
          onClick={() => setActive("writing")}
        >
          Writing
        </button>
      </div>

      <div className={`${styles.tabPanel} ${active === "experience" ? styles.tabPanelActive : ""}`}>
        <div className={styles.liCard}>
          <h3 className={styles.liHeading}>Experience</h3>

          <section className={styles.liCompany}>
            <div className={styles.liCompanyRow}>
              <div className={styles.liLogo} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.liLogoImg}
                  src="/assets/micron-logo.jpeg"
                  alt=""
                  width={44}
                  height={44}
                />
              </div>
              <div className={styles.liCompanyInfo}>
                <p className={styles.liCompanyName}>Micron Technology</p>
                <p className={styles.liCompanyMeta}>Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className={styles.liRoles}>
              <article className={styles.liRole}>
                <div className={styles.liRoleDot} aria-hidden="true" />
                <div className={styles.liRoleBody}>
                  <p className={styles.liRoleTitle}>Software Engineer</p>
                  <p className={styles.liRoleMeta}>July 2024 — Present | Hyderabad</p>
                  <ul className={styles.liBullets}>
                    <li>
                      Architected and deployed a microservices-based metadata governance platform on
                      Kubernetes (GKE) using OpenMetadata, enabling automated lineage tracking
                      across 50K+ datasets and reducing manual data discovery efforts by 75%.
                    </li>
                    <li>
                      Designed and deployed production-grade autonomous AI agents on GKE using ADK
                      with custom MCP integrations, automating Jira issue triage workflows and
                      reducing troubleshooting effort by 90%.
                    </li>
                    <li>
                      Engineered scalable, event-driven ingestion services using Cloud Run and GCP
                      Workflows, improving data synchronization throughput by 40% while lowering
                      operational costs.
                    </li>
                    <li>
                      Strengthened backend service reliability by implementing lifecycle
                      management, centralized state handling, and structured dependency patterns
                      within FastAPI microservices, improving runtime stability and horizontal
                      scalability.
                    </li>
                    <li>
                      Implemented distributed tracing using OpenTelemetry and GCP Cloud Trace,
                      enabling end-to-end request observability across services and reducing mean
                      time to resolution (MTTR) by 60%.
                    </li>
                  </ul>
                </div>
              </article>

              <article className={styles.liRole}>
                <div className={styles.liRoleDot} aria-hidden="true" />
                <div className={styles.liRoleBody}>
                  <p className={styles.liRoleTitle}>Data Engineering Intern</p>
                  <p className={styles.liRoleMeta}>Jan 2024 — July 2024 | Hyderabad</p>
                  <ul className={styles.liBullets}>
                    <li>
                      Built high-concurrency RESTful backend services using FastAPI on Kubernetes
                      (GKE), handling 5K+ concurrent requests with 99.9% uptime and reducing
                      latency by 30% via Redis caching and asynchronous task queues (Celery).
                    </li>
                    <li>
                      Built an AngularJS-based platform for streamlined product instance
                      registration, bug tracking, and dashboard management.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className={`${styles.tabPanel} ${active === "projects" ? styles.tabPanelActive : ""}`}>
        <div className={styles.projectCard}>
          <div className={styles.projectName}>Project Raseed</div>
          <ul className={styles.projectBullets}>
            <li>
              Architected an agentic AI system using Vertex AI Agent Engine and ADK to process
              multimodal receipt data and orchestrate autonomous financial insight generation
              workflows.
            </li>
            <li>
              Designed scalable backend pipelines integrating event-driven triggers, BigQuery
              analytics, and structured data processing for near real-time receipt-to-insight
              transformation.
            </li>
            <li>
              Implemented modular agent workflows with tool invocation and context management,
              enabling dynamic generation of Google Wallet passes.
            </li>
            <li>
              Optimized system latency and reliability by structuring stateless agent execution
              patterns with robust error handling.
            </li>
          </ul>
          <span className={styles.projectTag}>Vertex AI · ADK · BigQuery · GCP</span>
        </div>

        <div
          className={styles.projectCard}
          style={{
            borderStyle: "dashed",
            textAlign: "center",
            color: "var(--muted)",
            fontSize: "0.92rem",
            padding: "32px",
          }}
        >
          <span style={{ display: "block", fontSize: "1.3rem", marginBottom: "8px" }}>🌱</span>
          More things in progress. Check back soon.
        </div>
      </div>

      <div className={`${styles.tabPanel} ${active === "writing" ? styles.tabPanelActive : ""}`}>
        <div className={styles.writingList}>
          <a className={styles.writingItem} href={SUBSTACK_LINKS.essay1} target="_blank" rel="noreferrer">
            <span className={styles.writingTitle}>What Happens When You Stop Thinking</span>
            <span className={styles.writingYear}>2026</span>
          </a>
          <a className={styles.writingItem} href={SUBSTACK_LINKS.essay2} target="_blank" rel="noreferrer">
            <span className={styles.writingTitle}>What Two Years of Living Alone Taught</span>
            <span className={styles.writingYear}>2026</span>
          </a>
        </div>
        <a className={styles.subLink} href={SUBSTACK_LINKS.substack} target="_blank" rel="noreferrer">
          Substack →
        </a>
      </div>
    </section>
  );
}
