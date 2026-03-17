import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
      </div>
      <div className={styles.container}>
        <div className={styles.badge}>✨ Trusted by 10,000+ teams worldwide</div>
        <h1 className={styles.headline}>
          Build Products That
          <span className={styles.gradient}> Matter</span>
        </h1>
        <p className={styles.subheadline}>
          The all-in-one platform for modern teams to design, build, and launch
          incredible products at the speed of thought.
        </p>
        <div className={styles.cta}>
          <a href="#newsletter" className={styles.primaryBtn}>
            Start for Free →
          </a>
          <a href="#features" className={styles.secondaryBtn}>
            ▶ See How It Works
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>10K+</span>
            <span className={styles.statLabel}>Active Teams</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>99.9%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>User Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
