import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "LaunchPad completely transformed how our team ships products. We went from monthly releases to daily deployments without any of the stress.",
    name: "Sarah Chen",
    role: "CTO at TechVentures",
    avatar: "SC",
    avatarColor: "#6c63ff",
    stars: 5,
  },
  {
    quote:
      "The analytics alone are worth it. We discovered three major bottlenecks in our funnel and fixed them within a week. Revenue jumped 40%.",
    name: "Marcus Williams",
    role: "Head of Growth at ScaleUp",
    avatar: "MW",
    avatarColor: "#43e97b",
    stars: 5,
  },
  {
    quote:
      "I've tried dozens of platforms over the years. LaunchPad is the first one that actually feels like it was built by people who understand developers.",
    name: "Priya Patel",
    role: "Lead Engineer at Devcraft",
    avatar: "PP",
    avatarColor: "#ff6b9d",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>Loved by thousands of teams</h2>
          <p className={styles.subtitle}>
            Don&apos;t just take our word for it — hear from some of the amazing
            teams who have already made the switch.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
