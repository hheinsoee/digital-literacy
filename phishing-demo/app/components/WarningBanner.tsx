"use client";

export default function WarningBanner() {
  return (
    <div
      style={{
        background: "#d32f2f",
        color: "#fff",
        textAlign: "center",
        padding: "10px 16px",
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0.3,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      ⚠️ THIS IS A PHISHING SIMULATION FOR EDUCATIONAL PURPOSES ONLY — DO NOT
      ENTER REAL CREDENTIALS ⚠️
    </div>
  );
}
