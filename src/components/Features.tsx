import styles from "./Features.module.css";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Deploy your projects in seconds with our optimized build pipeline. Zero configuration needed — just code and ship.",
    color: "#f9a825",
    bg: "rgba(249, 168, 37, 0.1)",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and advanced access controls keep your data and your customers safe.",
    color: "#43e97b",
    bg: "rgba(67, 233, 123, 0.1)",
  },
  {
    icon: "📊",
    title: "Powerful Analytics",
    description:
      "Gain deep insights with real-time dashboards, custom reports, and AI-powered recommendations to grow faster.",
    color: "#6c63ff",
    bg: "rgba(108, 99, 255, 0.1)",
  },
  {
    icon: "🤝",
    title: "Seamless Collaboration",
    description:
      "Work together in real-time with your team. Comments, reviews, and version control built directly into your workflow.",
    color: "#ff6b9d",
    bg: "rgba(255, 107, 157, 0.1)",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Why LaunchPad</span>
          <h2 className={styles.title}>Everything you need to ship</h2>
          <p className={styles.subtitle}>
            Stop juggling multiple tools. LaunchPad brings everything your team
            needs into one beautiful, powerful platform.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ background: feature.bg }}
              >
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              <div
                className={styles.cardAccent}
                style={{ background: feature.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
