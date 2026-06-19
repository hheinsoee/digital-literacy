"use client";

import { useState } from "react";

const SHIFT = 3;

function caesarEncrypt(text: string): string {
  return text
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90)
        return String.fromCharCode(((code - 65 + SHIFT) % 26) + 65);
      if (code >= 97 && code <= 122)
        return String.fromCharCode(((code - 97 + SHIFT) % 26) + 97);
      return ch;
    })
    .join("");
}

function caesarDecrypt(text: string): string {
  return text
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90)
        return String.fromCharCode(((code - 65 - SHIFT + 26) % 26) + 65);
      if (code >= 97 && code <= 122)
        return String.fromCharCode(((code - 97 - SHIFT + 26) % 26) + 97);
      return ch;
    })
    .join("");
}

function toBase64(text: string): string {
  return btoa(
    new TextEncoder()
      .encode(text)
      .reduce((s, b) => s + String.fromCharCode(b), "")
  );
}

function fromBase64(text: string): string {
  try {
    const binary = atob(text);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  } catch {
    return "(invalid encoded text)";
  }
}

export default function EncryptionPage() {
  const [plainText, setPlainText] = useState("");
  const [encryptedInput, setEncryptedInput] = useState("");
  const [method, setMethod] = useState<"caesar" | "base64">("caesar");

  const encrypted =
    method === "caesar" ? caesarEncrypt(plainText) : toBase64(plainText);
  const decrypted =
    method === "caesar"
      ? caesarDecrypt(encryptedInput)
      : fromBase64(encryptedInput);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔐</div>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
            Encryption ဆိုတာ ဘာလဲ?
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7 }}>
            Encryption ဆိုတာ သတင်းအချက်အလက်ကို{" "}
            <strong style={{ color: "#38bdf8" }}>လျှို့ဝှက်ကုဒ်</strong>{" "}
            အဖြစ် ပြောင်းလဲခြင်း ဖြစ်ပါတယ်။
            <br />
            Key (သော့) ရှိမှသာ ပြန်ဖတ်နိုင်ပါတယ်။
          </p>
        </div>

        {/* How it works */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}
        >
          <h2
            style={{ fontSize: 20, marginBottom: 16, marginTop: 0, color: "#38bdf8" }}
          >
            📖 ဘယ်လို အလုပ်လုပ်လဲ?
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                background: "#22c55e",
                color: "#000",
                padding: "12px 20px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Hello 👋
              <div style={{ fontSize: 11, fontWeight: 400, marginTop: 4 }}>
                Plain Text
              </div>
            </div>
            <div style={{ fontSize: 24 }}>→ 🔒 →</div>
            <div
              style={{
                background: "#ef4444",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Khoor 🔐
              <div style={{ fontSize: 11, fontWeight: 400, marginTop: 4 }}>
                Encrypted
              </div>
            </div>
            <div style={{ fontSize: 24 }}>→ 🔑 →</div>
            <div
              style={{
                background: "#22c55e",
                color: "#000",
                padding: "12px 20px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Hello 👋
              <div style={{ fontSize: 11, fontWeight: 400, marginTop: 4 }}>
                Decrypted
              </div>
            </div>
          </div>
          <p style={{ color: "#94a3b8", fontSize: 14, margin: 0, lineHeight: 1.7 }}>
            💡 <strong>နေ့စဉ်ဘဝမှာ</strong> — WhatsApp, Viber, Telegram
            message တွေ၊ online banking၊ password တွေ အားလုံးမှာ encryption
            သုံးထားပါတယ်။ Encryption မရှိရင် ဘယ်သူမဆို သင့် data ကို
            ဖတ်နိုင်ပါတယ်။
          </p>
        </div>

        {/* Method selector */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 24,
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setMethod("caesar")}
            style={{
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              background: method === "caesar" ? "#38bdf8" : "#334155",
              color: method === "caesar" ? "#000" : "#94a3b8",
            }}
          >
            Caesar Cipher (A→D, B→E)
          </button>
          <button
            onClick={() => setMethod("base64")}
            style={{
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              background: method === "base64" ? "#38bdf8" : "#334155",
              color: method === "base64" ? "#000" : "#94a3b8",
            }}
          >
            Base64 Encoding
          </button>
        </div>

        {/* Encrypt section */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <h3 style={{ color: "#22c55e", marginTop: 0, marginBottom: 12 }}>
            🔒 Encrypt — စာကို ကုဒ်ပြောင်းမယ်
          </h3>
          <input
            type="text"
            placeholder="ဒီမှာ စာရိုက်ပါ... (e.g. Hello World)"
            value={plainText}
            onChange={(e) => setPlainText(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: 18,
              border: "2px solid #334155",
              borderRadius: 8,
              background: "#0f172a",
              color: "#fff",
              outline: "none",
              boxSizing: "border-box",
              marginBottom: 12,
            }}
          />
          <div
            style={{
              background: "#0f172a",
              border: "2px solid #ef4444",
              borderRadius: 8,
              padding: "14px 16px",
              minHeight: 24,
            }}
          >
            <span style={{ color: "#666", fontSize: 12 }}>Encrypted result:</span>
            <div
              style={{
                fontSize: 18,
                fontFamily: "monospace",
                color: "#ef4444",
                wordBreak: "break-all",
                marginTop: 4,
              }}
            >
              {encrypted || "..."}
            </div>
          </div>
        </div>

        {/* Decrypt section */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}
        >
          <h3 style={{ color: "#f59e0b", marginTop: 0, marginBottom: 12 }}>
            🔑 Decrypt — ကုဒ်ကို ပြန်ဖြည်မယ်
          </h3>
          <input
            type="text"
            placeholder="Encrypted text ထည့်ပါ... (e.g. Khoor Zruog)"
            value={encryptedInput}
            onChange={(e) => setEncryptedInput(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: 18,
              border: "2px solid #334155",
              borderRadius: 8,
              background: "#0f172a",
              color: "#fff",
              outline: "none",
              boxSizing: "border-box",
              marginBottom: 12,
            }}
          />
          <div
            style={{
              background: "#0f172a",
              border: "2px solid #22c55e",
              borderRadius: 8,
              padding: "14px 16px",
              minHeight: 24,
            }}
          >
            <span style={{ color: "#666", fontSize: 12 }}>Decrypted result:</span>
            <div
              style={{
                fontSize: 18,
                fontFamily: "monospace",
                color: "#22c55e",
                wordBreak: "break-all",
                marginTop: 4,
              }}
            >
              {decrypted || "..."}
            </div>
          </div>
        </div>

        {/* Real world examples */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h3 style={{ color: "#a78bfa", marginTop: 0, marginBottom: 16 }}>
            🌍 တကယ့်ဘဝမှာ Encryption ကို ဘယ်နေရာတွေမှာ သုံးလဲ?
          </h3>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              lineHeight: 2,
              fontSize: 15,
              color: "#cbd5e1",
            }}
          >
            <li>
              💬 <strong>Messaging apps</strong> — Telegram, WhatsApp, Signal
              (end-to-end encryption)
            </li>
            <li>
              🏦 <strong>Online Banking</strong> — KBZPay, Wave (transaction
              data encrypted)
            </li>
            <li>
              🔒 <strong>HTTPS websites</strong> — URL bar မှာ 🔒 icon
              ပြတာက encryption သုံးထားတာပါ
            </li>
            <li>
              📱 <strong>Phone storage</strong> — iPhone/Android က data
              encrypt လုပ်ထားပါတယ်
            </li>
            <li>
              🔑 <strong>Passwords</strong> — Website တွေက password ကို
              encrypt (hash) လုပ်ပြီး သိမ်းပါတယ်
            </li>
          </ul>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 13,
            color: "#475569",
          }}
        >
          Digital Literacy Training Workshop
        </p>
      </div>
    </div>
  );
}
