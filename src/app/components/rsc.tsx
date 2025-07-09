// src/app/components/RSC.tsx
// ✅ This is a Server Component

export default async function RSC() {
    // Simulate a delay (e.g., DB or API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const now = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>⏳ Server-Side Rendered Component (RSC)</h1>
        <p style={styles.text}>This content was rendered on the server.</p>
        <p style={styles.timestamp}>🕒 Generated at: {now}</p>
  
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
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#0044cc",
      backgroundColor: "#f0f8ff",
      padding: "0.4rem 0.8rem",
      borderRadius: "8px",
      display: "inline-block",
      marginBottom: "1rem",
    },
    hr: {
      margin: "2rem 0",
      border: "none",
      borderTop: "1px solid #eaeaea",
    },
  };
  