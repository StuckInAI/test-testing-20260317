import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>🚀 LaunchPad</span>
            <p className={styles.tagline}>
              The all-in-one platform for modern teams to build and ship
              incredible products.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#newsletter">Pricing</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} LaunchPad. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Twitter" className={styles.socialLink}>𝕏</a>
            <a href="#" aria-label="GitHub" className={styles.socialLink}>⌨</a>
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
