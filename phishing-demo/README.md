# Phishing Awareness Demo

This project is **for knowledge sharing only** about digital literacy for end users.

It demonstrates how phishing pages mimic real login pages (Google & Facebook) to help users recognize and avoid phishing attacks during digital literacy training workshops.

## Disclaimer

⚠️ **This is an educational tool only.** It is not intended for malicious use. Every page displays a prominent warning banner. Submitted credentials are logged locally to a text file (`captured-logs.txt`) for demonstration purposes only.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with project overview |
| `/google` | Fake Google login page |
| `/facebook` | Fake Facebook login page |
| `/google/hacked` | Burmese "You've been phished" result for Google |
| `/facebook/hacked` | Burmese "You've been phished" result for Facebook |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## How It Works

1. User enters fake credentials on `/google` or `/facebook`
2. Credentials are appended to `captured-logs.txt` in the project root
3. A "You've Been Phished!" screen appears with security tips
4. No database required — everything logs to a plain text file

## License

For educational and training purposes only.
