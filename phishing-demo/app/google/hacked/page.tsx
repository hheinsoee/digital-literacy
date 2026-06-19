"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import WarningBanner from "../../components/WarningBanner";

function HackedContent() {
  const params = useSearchParams();
  const email = params.get("email") || "";
  const password = params.get("password") || "";

  return (
    <>
      <WarningBanner />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff3f3",
          paddingTop: 44,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 500, padding: 40 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🚨</div>
          <h1 style={{ color: "#d32f2f", fontSize: 28, marginBottom: 12 }}>
            သင် Phishing ခံလိုက်ရပါပြီ!
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#333",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            ဒါက <strong>အတု Google login page</strong> ဖြစ်ပါတယ်။ ဒါက တကယ့်
            phishing page ဖြစ်ခဲ့ရင် hacker က သင့် credentials ကို
            ရသွားပါပြီ။
          </p>
          <div
            style={{
              background: "#fff",
              border: "2px solid #d32f2f",
              borderRadius: 8,
              padding: 20,
              textAlign: "left",
              marginBottom: 24,
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontWeight: 700,
                color: "#d32f2f",
              }}
            >
              ဖမ်းမိသွားတဲ့ အချက်အလက်များ:
            </p>
            <p
              style={{
                margin: "0 0 4px",
                fontFamily: "monospace",
                fontSize: 14,
              }}
            >
              Email: <strong>{email}</strong>
            </p>
            <p style={{ margin: 0, fontFamily: "monospace", fontSize: 14 }}>
              Password: <strong>{password}</strong>
            </p>
          </div>
          <div
            style={{
              background: "#e8f5e9",
              borderRadius: 8,
              padding: 16,
              textAlign: "left",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontWeight: 700,
                color: "#2e7d32",
              }}
            >
              🛡️ ကိုယ့်ကိုယ်ကို ဘယ်လိုကာကွယ်မလဲ:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                lineHeight: 1.8,
                fontSize: 14,
              }}
            >
              <li>Credentials မထည့်ခင် URL ကို အမြဲစစ်ဆေးပါ</li>
              <li>Two-Factor Authentication (2FA) ဖွင့်ထားပါ</li>
              <li>သံသယဖြစ်ဖွယ် link တွေကို မနှိပ်ပါနဲ့</li>
              <li>Password Manager သုံးပါ</li>
            </ul>
          </div>
          <div
            style={{
              background: "#fff3e0",
              borderRadius: 8,
              padding: 16,
              textAlign: "center",
              marginTop: 24,
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                color: "#e65100",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              ⚠️ တကယ့် phishing attack မှာဆိုရင် ဒီ page ပြီးရင် တကယ့်
              Google website ကို အလိုအလျောက် redirect လုပ်ပေးပါတယ်။
              ဒါကြောင့် သင် hack ခံလိုက်ရတာကို သတိမထားမိပါဘူး။
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function GoogleHackedPage() {
  return (
    <Suspense fallback={null}>
      <HackedContent />
    </Suspense>
  );
}
