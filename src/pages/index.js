import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Documentation Portfolio"
      description="A content architecture portfolio by Andrew Taylor">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Andrew Taylor</h1>
          <p className={styles.subtitle}>Content Architecture &amp; Technical Writing</p>
          <p className={styles.description}>
            A portfolio of documentation work demonstrating structure, hierarchy,
            and editorial judgment — the decisions that make content usable,
            not just accurate.
          </p>
          <Link className={styles.cta} to="/docs/intro">
            View the docs
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Content architecture</h2>
            <p>
              Organizing and structuring content so readers find what they need
              and understand what they find. The work behind the work.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Technical writing</h2>
            <p>
              Clear, precise documentation for complex subjects — written for
              the reader's context, not the author's expertise.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Human + AI collaboration</h2>
            <p>
              Some content here was co-written with Claude (Anthropic). Structure
              and editorial decisions are mine; the collaboration is transparent
              and documented.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}