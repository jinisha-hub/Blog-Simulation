"use client";

import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [time, setTime] = useState<string>("Loading...");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const now = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    setTime(now);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🧭 Client Component (Hydrated)</h1>
      <p style={styles.text}>This component was hydrated on the client side.</p>

      <p style={styles.timestamp}>
        💻 <strong>Rendered at:</strong> {time}
      </p>

      <hr style={styles.hr} />

      <p style={styles.text}>
        🖱️ Button clicked: <strong>{count}</strong> times
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005ecb")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
      >
        🔵 Click Me!
      </button>

      <hr style={styles.hr} />
      
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "600px",
    margin: "3rem auto",
    padding: "2rem",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif",
    color: "#333",
  },
  heading: {
    fontSize: "2rem",
    color: "#0070f3",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
  },
  timestamp: {
    fontSize: "1.05rem",
    fontWeight: "bold",
    color: "#0044cc",
    backgroundColor: "#f0f8ff",
    padding: "0.4rem 0.8rem",
    borderRadius: "8px",
    display: "inline-block",
    marginBottom: "1rem",
  },
  button: {
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  hr: {
    margin: "2rem 0",
    border: "none",
    borderTop: "1px solid #eaeaea",
  },
};
