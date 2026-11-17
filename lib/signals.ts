export type Track = "agent-id" | "four-meme" | "dex-pair";

export interface Signal {
  id: number;
  title: string;
  project: string;
  track: Track;
  chain: string;
  status: "Live" | "Ending soon" | "Ended";
  contractAddress: string;
  mintContract: string | null;
  pairAddress: string | null;
  mintPricePerShareUsd: number | null;
  tokensPerShare: number | null;
  costPerTokenUsd: number | null;
  currentPriceUsd: number | null;
  marketCapUsd: number | null;
  liquidityUsd: number | null;
  liquidityLocked: string;
  holders: number | null;
  volume24hUsd: number | null;
  sharesMinted: number | null;
  sharesTotal: number | null;
  launchedOn: string | null;
  endsOn: string | null;
  holdRule: string;
  rewards: string;
  riskNote: string;
  earlyNote: string;
  sourceUrls: string[];
  lastVerifiedAt: string;
}

export const TRACK_LABELS: Record<Track, string> = {
  "agent-id": "Agent ID Mints",
  "four-meme": "Four.Meme Launches",
  "dex-pair": "New DEX Pairs",
};

export const SIGNALS: Signal[] = [
  {
    id: 1,
    title: "JAGENT, JAGER AGENT, Agent ID mint on BSC",
    project: "JAGENT",
    track: "agent-id",
    chain: "BNB Smart Chain",
    status: "Live",
    contractAddress: "0x8e6442663A4F8C50b6132c68d42A30E7DFE4Ae15",
    mintContract: "0x3643A907f875fA9B740e1C0747E91b5aA5222aB8",
    pairAddress: "0xE6efCdEf2b720d1eca2b69eDB7ef357725680BEa",
    mintPricePerShareUsd: 4.58,
    tokensPerShare: 1797682,
    costPerTokenUsd: 0.00000255,
    currentPriceUsd: 0.00000261,
    marketCapUsd: 7900000,
    liquidityUsd: 2780000,
    liquidityLocked: "100 percent of LP in the dead address, permanently locked, per the project on 17 Nov 2026",
    holders: 11600,
    volume24hUsd: 2320000,
    sharesMinted: 510000,
    sharesTotal: 4440000,
    launchedOn: "2026-10-28",
    endsOn: "2026-11-23",
    holdRule: "Hold at least 50 percent of the JAGENT you mint during the event at settlement, or the fishing prize is cancelled. Selling means no fishing rewards.",
    rewards: "S2 Fishing Event, Nov 16 to Nov 23, 08:00 UTC+8. 1 share minted equals 1 cast. Top 100 by points split 10,000 USDT. Rank 1 gets 1,500 USDT, rank 2 gets 1,000 USDT, rank 3 gets 600 USDT, ranks 4 to 10 get 250 USDT each, ranks 11 to 30 get 100 USDT each, ranks 31 to 100 get 45 USDT each.",
    riskNote: "Meme token. The whitepaper says it has no promised utility, yield or value, and the price can fall to zero. Price was 0.00000634 USD at its high on 2 Nov 2026, and about 0.00000261 USD on 17 Nov 2026. Minting is paid, not free.",
    earlyNote: "Early minters got about 50,000,000 JAGENT per share for 1 USDT. On 17 Nov 2026 the mint gave about 1,797,682 JAGENT per share for about 4.58 USDT. Same token, very different entry, so the mint price per share matters more than the headline price.",
    sourceUrls: [
      "https://jager.live",
      "https://jager.live/fish",
      "https://x.com/jagerbnb_",
      "https://bscscan.com/token/0x8e6442663A4F8C50b6132c68d42A30E7DFE4Ae15",
    ],
    lastVerifiedAt: "2026-11-17",
  },
];

export function mintProgress(signal: Signal): number | null {
  if (signal.sharesMinted === null || signal.sharesTotal === null) return null;
  return Math.round((signal.sharesMinted / signal.sharesTotal) * 1000) / 10;
}
