"use client";

import { useMemo, useState } from "react";
import { Copy, ExternalLink, Search } from "lucide-react";
import { SIGNALS, TRACK_LABELS, mintProgress, type Signal, type Track } from "@/lib/signals";

type Tab = "all" | Track;

const TABS: { id: Tab; label: string }[] = [
  { id: "all", label: "All signals" },
  { id: "agent-id", label: "Agent ID Mints" },
  { id: "four-meme", label: "Four.Meme Launches" },
  { id: "dex-pair", label: "New DEX Pairs" },
];

function fmtUsd(n: number | null): string {
  if (n === null) return "Not verified yet";
  if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
  if (n >= 1) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(8)}`;
}

function fmtNum(n: number | null): string {
  if (n === null) return "Not verified yet";
  return n.toLocaleString("en-US");
}

function SignalCard({ signal }: { signal: Signal }) {
  const [copied, setCopied] = useState(false);
  const progress = mintProgress(signal);
  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(signal.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <article className="rounded-xl border border-stone-200 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-green-800">
            {TRACK_LABELS[signal.track]} · {signal.chain}
          </p>
          <h2 className="mt-1 text-xl font-bold">{signal.title}</h2>
        </div>
        <span className="rounded-full border border-green-800 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
          {signal.status}
        </span>
      </div>

      <p className="mt-3 text-sm text-stone-600">{signal.earlyNote}</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Mint price per share</p>
          <p className="mt-1 font-semibold">{signal.mintPricePerShareUsd === null ? "Not verified yet" : `$${signal.mintPricePerShareUsd.toFixed(2)}`}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Tokens per share</p>
          <p className="mt-1 font-semibold">{fmtNum(signal.tokensPerShare)}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Cost per token</p>
          <p className="mt-1 font-semibold">{fmtUsd(signal.costPerTokenUsd)}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Current price</p>
          <p className="mt-1 font-semibold">{fmtUsd(signal.currentPriceUsd)}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Market cap</p>
          <p className="mt-1 font-semibold">{fmtUsd(signal.marketCapUsd)}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Liquidity</p>
          <p className="mt-1 font-semibold">{fmtUsd(signal.liquidityUsd)}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">24h volume</p>
          <p className="mt-1 font-semibold">{fmtUsd(signal.volume24hUsd)}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Holders</p>
          <p className="mt-1 font-semibold">{fmtNum(signal.holders)}</p>
        </div>
        <div className="rounded-lg border border-stone-200 p-3">
          <p className="text-xs text-stone-500">Ends</p>
          <p className="mt-1 font-semibold">{signal.endsOn ?? "No end date listed"}</p>
        </div>
      </div>

      {progress !== null && signal.sharesMinted !== null && signal.sharesTotal !== null && (
        <div className="mt-4">
          <p className="text-xs text-stone-500">
            Mint progress: {signal.sharesMinted.toLocaleString("en-US")} of {signal.sharesTotal.toLocaleString("en-US")} shares ({progress} percent)
          </p>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-stone-200">
            <div className="h-full bg-green-800" style={{ width: `${Math.min(100, progress)}%` }} />
          </div>
        </div>
      )}

      {signal.curveProgressPct !== null && (
        <div className="mt-4">
          <p className="text-xs text-stone-500">
            Bonding curve: {signal.curveProgressPct} percent complete
            {signal.raisedUsd !== null && signal.curveTargetUsd !== null ? `, ${signal.raisedUsd.toLocaleString("en-US")} USD raised of about ${signal.curveTargetUsd.toLocaleString("en-US")} USD` : ""}
          </p>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-stone-200">
            <div className="h-full bg-green-800" style={{ width: `${Math.min(100, signal.curveProgressPct)}%` }} />
          </div>
        </div>
      )}

      <div className="mt-4 space-y-2 text-sm">
        <p><span className="font-semibold">Liquidity: </span>{signal.liquidityLocked}</p>
        <p><span className="font-semibold">Hold rule: </span>{signal.holdRule}</p>
        <p><span className="font-semibold">Rewards: </span>{signal.rewards}</p>
        <p><span className="font-semibold">Risk: </span>{signal.riskNote}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={copyContract}
          className="inline-flex items-center gap-1 rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-semibold hover:bg-stone-100"
        >
          <Copy size={14} /> {copied ? "Copied" : "Copy contract"}
        </button>
        <span className="break-all font-mono text-xs text-stone-500">{signal.contractAddress}</span>
      </div>
      {signal.mintContract && (
        <p className="mt-2 break-all font-mono text-xs text-stone-500">Mint contract: {signal.mintContract}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {signal.sourceUrls.map((url) => {
          let host = url;
          try { host = new URL(url).hostname.replace(/^www\./, ""); } catch { host = url; }
          return (
            <a key={url} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-green-800 px-3 py-1 text-xs font-semibold text-green-800 hover:bg-green-50">
              {host} <ExternalLink size={12} />
            </a>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-stone-400">Last verified: {signal.lastVerifiedAt}</p>
    </article>
  );
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    return SIGNALS.filter((s) => {
      if (tab !== "all" && s.track !== tab) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return s.title.toLowerCase().includes(q) || s.project.toLowerCase().includes(q) || s.contractAddress.toLowerCase().includes(q);
    });
  }, [tab, query]);
  const comingSoon = tab === "dex-pair";
  const showFourMemeNote = tab === "four-meme";
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-green-800">First Signal</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Early crypto, verified first.</h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Early Agent ID mints, Four.Meme launches, and new DEX pairs, with mint price, cost per token, liquidity, and risk shown clearly. Every listing is checked on the official page and on chain first. Paid mints cost money, and prices can fall to zero. This site lists signals, it does not buy for you.
        </p>
      </header>

      <div className="mt-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${tab === t.id ? "border-green-800 bg-green-800 text-white" : "border-stone-300 bg-white hover:bg-stone-100"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative mt-4">
        <Search size={16} className="absolute left-3 top-3 text-stone-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or contract address"
          className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-green-800"
        />
      </div>

      {showFourMemeNote && (
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-bold">How Four.Meme graduation works</h2>
          <p className="mt-2 text-sm text-stone-600">
            Four.Meme tokens trade on a bonding curve first. Supply is fixed at 1,000,000,000, 80 percent is sold on the curve, and when the curve fills, about 18 BNB or about 10,000 USDT raised, the rest moves to a PancakeSwap V2 pool and the LP tokens are burned. Most tokens never get there: 512 launches and 1 graduation in 24 hours on 17 Nov 2026, a 0.20 percent graduation rate, and 1,792 launches in a day with only 1 reaching PancakeSwap on 15 Nov 2026. A listing here is an early curve watch, not a proven opportunity, until it graduates with a real pool and volume.
          </p>
        </div>
      )}

      {comingSoon ? (
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-bold">New DEX Pairs: coming soon</h2>
          <p className="mt-2 text-sm text-stone-600">
            Track 1, Agent ID Mints, and Track 2, Four.Meme Launches, are live. This track is next, one after the other, and it will only list pairs that have been verified on DexScreener and on chain. No unverified pairs will be added here.
          </p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-bold">No signals match that search yet.</h2>
          <p className="mt-2 text-sm text-stone-600">More signals are being hunted daily. Only verified items are listed here.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {filtered.map((s) => <SignalCard key={s.id} signal={s} />)}
        </div>
      )}

      <footer className="mt-10 border-t border-stone-200 pt-4 text-xs text-stone-500">
        <p>First Signal lists early opportunities with verified information. It is not financial advice. Minting is often paid, prices are volatile, and a token can fall to zero. Check the contract address yourself before you send anything.</p>
        <p className="mt-2">Track 1 live: Agent ID Mints. Track 2 live: Four.Meme Launches. Track 3 next: New DEX Pairs.</p>
      </footer>
    </main>
  );
}
