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
  curveProgressPct: number | null;
  raisedUsd: number | null;
  curveTargetUsd: number | null;
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
    curveProgressPct: null,
    raisedUsd: null,
    curveTargetUsd: null,
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
  {
    id: 2,
    title: "WUKONG, fair launch meme on Four.Meme, BSC, bonding curve",
    project: "WUKONG",
    track: "four-meme",
    chain: "BNB Smart Chain",
    status: "Live",
    contractAddress: "0x2ebe63b46d08b0e2acc85e2a9918deea681b4444",
    mintContract: null,
    pairAddress: null,
    mintPricePerShareUsd: null,
    tokensPerShare: null,
    costPerTokenUsd: null,
    currentPriceUsd: null,
    marketCapUsd: null,
    liquidityUsd: null,
    liquidityLocked: "Not graduated yet, so no PancakeSwap pool exists and no LP is locked yet. On graduation, Four.Meme puts the remaining supply and raised funds into a PancakeSwap V2 pool and burns the LP tokens.",
    holders: null,
    volume24hUsd: null,
    sharesMinted: null,
    sharesTotal: null,
    curveProgressPct: 0.33,
    raisedUsd: 40.17,
    curveTargetUsd: 12172,
    launchedOn: "2026-11-17",
    endsOn: null,
    holdRule: "No hold rule published. 100 holders unlocks Four.Meme name protection.",
    rewards: "None published. The site lists live tools: Mission Desk, Creator Desk, Partner Leads, and Post Generator.",
    riskNote: "Bonding curve only 0.33 percent complete on 17 Nov 2026, with 40.17 USDT raised of about 12,172 USDT. DexScreener had no pair for this contract on 17 Nov 2026, so there is no DEX price, market cap, or liquidity to verify yet. Most Four.Meme tokens never graduate: 512 launches and 1 graduation in 24 hours on 17 Nov 2026, a 0.20 percent graduation rate, and 1,792 launches in a day with only 1 reaching PancakeSwap on 15 Nov 2026.",
    earlyNote: "Very early, and very unproven. The project says no team pre-mint and 0 percent launch tax, supply 1,000,000,000, liquidity allocation 770.20M (77.0 percent), operations 97.97M (9.8 percent), community and advisors 131.83M (13.2 percent). Early here means before graduation, not after a proven market exists.",
    sourceUrls: [
      "https://wukongmeme.com/",
      "https://www.four.meme/",
      "https://dexscreener.com/bsc/0x2ebe63b46d08b0e2acc85e2a9918deea681b4444",
    ],
    lastVerifiedAt: "2026-11-17",
  },
  {
    id: 3,
    title: "GOSENT, Four.Meme launch on BSC, bonding curve",
    project: "GOSENT",
    track: "four-meme",
    chain: "BNB Smart Chain",
    status: "Live",
    contractAddress: "0x9234E1C29F63D140CF8ce508854a8A18C1C4fFFF",
    mintContract: null,
    pairAddress: "0x9234E1C29F63D140CF8ce508854a8A18C1C4fFFF:4meme",
    mintPricePerShareUsd: null,
    tokensPerShare: null,
    costPerTokenUsd: null,
    currentPriceUsd: 0.000003184,
    marketCapUsd: 3184,
    liquidityUsd: null,
    liquidityLocked: "Still on the Four.Meme bonding curve, not graduated to PancakeSwap yet, so no LP is locked yet.",
    holders: null,
    volume24hUsd: 0,
    sharesMinted: null,
    sharesTotal: null,
    curveProgressPct: 0,
    raisedUsd: null,
    curveTargetUsd: null,
    launchedOn: "2026-11-17",
    endsOn: null,
    holdRule: "No hold rule published.",
    rewards: "None published.",
    riskNote: "Created 17 Nov 2026 at 09:43 UTC, market cap 3,184 USD, 24h volume 0 USD, 24h trades 1 buy and 0 sells, per DexScreener on 17 Nov 2026. This is minutes old, with almost no trading, and no verified audit, team, or utility. Treat it as an early curve watch, not as a proven opportunity.",
    earlyNote: "Listed because it is a fresh Four.Meme launch with a verified contract and DexScreener pair, and it shows how early this track gets. It has not graduated, and most tokens at this stage never do.",
    sourceUrls: [
      "https://dexscreener.com/bsc/0x9234e1c29f63d140cf8ce508854a8a18c1c4ffff:4meme",
      "https://www.four.meme/",
    ],
    lastVerifiedAt: "2026-11-17",
  },
  {
    id: 4,
    title: "KuKu / WBNB, new DEX pair on BSC",
    project: "KuKu",
    track: "dex-pair",
    chain: "BNB Smart Chain",
    status: "Live",
    contractAddress: "0xbcb6973280f2c6c31b8c646dd172dcef392e7777",
    mintContract: null,
    pairAddress: "0xd5115529563b8fd3ce3d8b5570fb2f3368324858",
    mintPricePerShareUsd: null,
    tokensPerShare: null,
    costPerTokenUsd: null,
    currentPriceUsd: 0.00008886,
    marketCapUsd: 72856,
    liquidityUsd: 24652,
    liquidityLocked: "Lock status not verified. Reserve was 24,652 USD on 17 Nov 2026, per GeckoTerminal. Do not assume the liquidity is locked.",
    holders: null,
    volume24hUsd: 8154,
    sharesMinted: null,
    sharesTotal: null,
    curveProgressPct: null,
    raisedUsd: null,
    curveTargetUsd: null,
    launchedOn: "2026-11-17",
    endsOn: null,
    holdRule: "No hold rule published.",
    rewards: "None published.",
    riskNote: "New pair created 17 Nov 2026 at 11:00 UTC, only hours old. 24h volume 8,154 USD, 62 trades in 24h (28 buys, 34 sells), 27 unique traders, per GeckoTerminal. No audit, team, or utility verified. Market cap shown is fully diluted value from GeckoTerminal, supply not verified. A new pair can lose most of its value in minutes, and liquidity may be removed.",
    earlyNote: "Passed the First Signal new pair gate on 17 Nov 2026: reserve over 10,000 USD, 24h volume over 5,000 USD, over 50 trades, and over 25 unique traders. That gate filters out the hundreds of new pools with almost no trading, it does not make this safe.",
    sourceUrls: [
      "https://www.geckoterminal.com/bsc/pools/0xd5115529563b8fd3ce3d8b5570fb2f3368324858",
      "https://dexscreener.com/bsc/0xd5115529563b8fd3ce3d8b5570fb2f3368324858",
    ],
    lastVerifiedAt: "2026-11-17",
  },
  {
    id: 5,
    title: "GTA6 / WBNB, new DEX pair on BSC",
    project: "GTA6",
    track: "dex-pair",
    chain: "BNB Smart Chain",
    status: "Live",
    contractAddress: "0x815591fa41740dd6f520500f5f14186be3d67777",
    mintContract: null,
    pairAddress: "0x9f7fb32f3eb799b33065e04edccce606860d3bd8",
    mintPricePerShareUsd: null,
    tokensPerShare: null,
    costPerTokenUsd: null,
    currentPriceUsd: 0.00006216,
    marketCapUsd: 62157,
    liquidityUsd: 13461,
    liquidityLocked: "Lock status not verified. Reserve was 13,461 USD on 17 Nov 2026, per GeckoTerminal. Do not assume the liquidity is locked.",
    holders: null,
    volume24hUsd: 13107,
    sharesMinted: null,
    sharesTotal: null,
    curveProgressPct: null,
    raisedUsd: null,
    curveTargetUsd: null,
    launchedOn: "2026-11-17",
    endsOn: null,
    holdRule: "No hold rule published.",
    rewards: "None published.",
    riskNote: "New pair created 17 Nov 2026 at 10:56 UTC, only hours old. 24h volume 13,107 USD, 131 trades in 24h (62 buys, 69 sells), 48 unique traders, per GeckoTerminal. No audit, team, or utility verified. Market cap shown is fully diluted value from GeckoTerminal, supply not verified. A new pair can lose most of its value in minutes, and liquidity may be removed.",
    earlyNote: "Passed the First Signal new pair gate on 17 Nov 2026: reserve over 10,000 USD, 24h volume over 5,000 USD, over 50 trades, and over 25 unique traders. Highest 24h volume of the three new pairs listed today.",
    sourceUrls: [
      "https://www.geckoterminal.com/bsc/pools/0x9f7fb32f3eb799b33065e04edccce606860d3bd8",
      "https://dexscreener.com/bsc/0x9f7fb32f3eb799b33065e04edccce606860d3bd8",
    ],
    lastVerifiedAt: "2026-11-17",
  },
  {
    id: 6,
    title: "TapeX / WBNB, new DEX pair on BSC",
    project: "TapeX",
    track: "dex-pair",
    chain: "BNB Smart Chain",
    status: "Live",
    contractAddress: "0xeee6270e7e10d21bbbc8a5abfc3df92e3f207777",
    mintContract: null,
    pairAddress: "0xf5578bbac01b525c5723c10e219ce89f2bc8afb5",
    mintPricePerShareUsd: null,
    tokensPerShare: null,
    costPerTokenUsd: null,
    currentPriceUsd: 0.00004922,
    marketCapUsd: 49224,
    liquidityUsd: 12064,
    liquidityLocked: "Lock status not verified. Reserve was 12,064 USD on 17 Nov 2026, per GeckoTerminal. Do not assume the liquidity is locked.",
    holders: null,
    volume24hUsd: 10780,
    sharesMinted: null,
    sharesTotal: null,
    curveProgressPct: null,
    raisedUsd: null,
    curveTargetUsd: null,
    launchedOn: "2026-11-17",
    endsOn: null,
    holdRule: "No hold rule published.",
    rewards: "None published.",
    riskNote: "New pair created 17 Nov 2026 at 10:55 UTC, only hours old. 24h volume 10,780 USD, 165 trades in 24h (80 buys, 85 sells), 64 unique traders, per GeckoTerminal. No audit, team, or utility verified. Market cap shown is fully diluted value from GeckoTerminal, supply not verified. A new pair can lose most of its value in minutes, and liquidity may be removed.",
    earlyNote: "Passed the First Signal new pair gate on 17 Nov 2026: reserve over 10,000 USD, 24h volume over 5,000 USD, over 50 trades, and over 25 unique traders. Most active of the three new pairs today, by trade count.",
    sourceUrls: [
      "https://www.geckoterminal.com/bsc/pools/0xf5578bbac01b525c5723c10e219ce89f2bc8afb5",
      "https://dexscreener.com/bsc/0xf5578bbac01b525c5723c10e219ce89f2bc8afb5",
    ],
    lastVerifiedAt: "2026-11-17",
  },
];

export function mintProgress(signal: Signal): number | null {
  if (signal.sharesMinted === null || signal.sharesTotal === null) return null;
  return Math.round((signal.sharesMinted / signal.sharesTotal) * 1000) / 10;
}
