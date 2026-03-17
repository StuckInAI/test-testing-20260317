"use client";
import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className={styles.section} id="newsletter">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.content}>
            <span className={styles.emoji}>📬</span>
            <h2 className={styles.title}>Stay in the loop</h2>
            <p className={styles.subtitle}>
              Get the latest updates, tips, and product news delivered straight
              to your inbox. No spam, ever.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  required
                />
                <button
                  type="submit"
                  className={styles.btn}
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "loading"
                    ? "Subscribing..."
                    : status === "success"
                    ? "✓ Subscribed!"
                    : "Subscribe"}
                </button>
              </div>
              {message && (
                <p
                  className={
                    status === "success" ? styles.successMsg : styles.errorMsg
                  }
                >
                  {status === "success" ? "✓ " : "✗ "}{message}
                </p>
              )}
            </form>
            <p className={styles.disclaimer}>
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
