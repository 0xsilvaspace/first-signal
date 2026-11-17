# First Signal

Early crypto opportunities, checked on the official page and on chain first. Agent ID mints, Four.Meme launches, and new DEX pairs, with mint price, cost per token, liquidity, and risk shown clearly.

Live site: to be added after the first Vercel deploy.

## What it does

- Browse by track. Tabs for All signals, Agent ID Mints, Four.Meme Launches, and New DEX Pairs. Search by name or contract address.
- Check the verified details before you act. Each listing shows contract address and mint contract, mint price per share, tokens per share, cost per token, current price, market cap, liquidity and whether it is locked, holders, 24h volume, mint progress, deadline and hold rules, rewards, and risk notes. Every listing links to its official source.
- Early entry matters. Each card shows the early note, for example how much the first minters got per share compared with the current mint price.
- Paid mints are allowed here, with the cost shown clearly. This is different from Alpha Scout, which is free only. This site lists signals, it does not buy for you, and it is not financial advice.

## Tracks, one after the other

- Track 1, live first: Agent ID Mints on BSC. Seeded with JAGENT, verified 17 Nov 2026.
- Track 2, next: Four.Meme Launches.
- Track 3, next: New DEX Pairs.

A track is only marked live after it has been built and verified on the live site. No unverified listings are added.

## Stack

- Next.js (App Router) with React and TypeScript
- Tailwind CSS and lucide-react icons
- Vercel hosting
- Data in lib/signals.ts and signals.json, verified on official pages and on chain
