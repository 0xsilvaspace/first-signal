# First Signal

Early crypto opportunities, checked on the official page and on chain first. Agent ID mints, Four.Meme launches, and new DEX pairs, with mint price, cost per token, liquidity, and risk shown clearly.

Live site: https://first-signal-vercel.vercel.app

## What it does

- Browse by track. Tabs for All signals, Agent ID Mints, Four.Meme Launches, and New DEX Pairs. Search by name or contract address.
- Check the verified details before you act. Each listing shows contract address and mint contract, mint price per share, tokens per share, cost per token, current price, market cap, liquidity and whether it is locked, holders, 24h volume, mint progress, deadline and hold rules, rewards, and risk notes. Every listing links to its official source.
- Early entry matters. Each card shows the early note, for example how much the first minters got per share compared with the current mint price.
- Paid mints are allowed here, with the cost shown clearly. This is different from Alpha Scout, which is free only. This site lists signals, it does not buy for you, and it is not financial advice.

## Tracks, one after the other

- Track 1, live: Agent ID Mints on BSC. Seeded with JAGENT, verified 17 Nov 2026.
- Track 2, live: Four.Meme Launches. Seeded with WUKONG and GOSENT, verified 17 Nov 2026, with the graduation funnel shown.
- Track 3, live: New DEX Pairs. Seeded with KuKu, GTA6, and TapeX, verified on GeckoTerminal 17 Nov 2026, with a gate of reserve over 10,000 USD, 24h volume over 5,000 USD, over 50 trades, and over 25 unique traders.

A track is only marked live after it has been built and verified on the live site. No unverified listings are added.

## Stack

- Next.js (App Router) with React and TypeScript
- Tailwind CSS and lucide-react icons
- Vercel hosting
- Data in lib/signals.ts and signals.json, verified on official pages and on chain
