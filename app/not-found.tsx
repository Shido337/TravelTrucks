import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        fontFamily: "inherit",
        background: "#fff",
        color: "#101828",
      }}
    >
      <h1
        style={{ fontSize: "80px", fontWeight: 700, lineHeight: 1, margin: 0 }}
      >
        404
      </h1>
      <p style={{ fontSize: "20px", color: "rgba(16,24,40,0.6)", margin: 0 }}>
        Page not found
      </p>
      <Link
        href="/"
        style={{
          padding: "14px 40px",
          background: "#829B91",
          color: "#fff",
          borderRadius: "200px",
          fontSize: "16px",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
