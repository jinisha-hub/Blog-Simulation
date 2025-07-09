// app/main/page.tsx
import ClientComponent from "../components/clientsidecomponent";
import RSC from "../components/rsc";

export default async function MainPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🧠 Main Page (App Router)</h1>
      <p style={styles.text}>This page renders both a React Server Component and a Client Component.</p>

      <hr style={styles.hr} />

      <section style={styles.section}>
        <RSC />
      </section>

      <section style={styles.section}>
        <ClientComponent />
      </section>

      <hr style={styles.hr} />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "700px",
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
    marginBottom: "1.2rem",
  },
  section: {
    marginBottom: "2rem",
  },
  hr: {
    margin: "2rem 0",
    border: "none",
    borderTop: "1px solid #eaeaea",
  },
};
