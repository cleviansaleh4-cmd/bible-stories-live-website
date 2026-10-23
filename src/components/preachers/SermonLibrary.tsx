import { useMemo, useState } from "react";
import { SERMONS } from "@/data/sermons";
import type { Sermon } from "@/data/sermons-a";
import { useBookmarks } from "@/hooks/useBookmarks";
import { BookmarkButton } from "./BookmarkButton";

const DURATIONS = ["all", "15 minutes", "20 minutes", "30 minutes", "45 minutes"] as const;

const bibleLink = (ref: string) =>
  `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}`;

const printSermon = (s: Sermon) => {
  const w = window.open("", "_blank", "noopener,noreferrer,width=800,height=900");
  if (!w) return;
  const esc = (t: string) =>
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const points = s.points
    .map(
      (p) => `<h3>${esc(p.heading)}</h3><p>${esc(p.explanation)}</p>
        <ul>${p.scriptures.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`
    )
    .join("");
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(s.title)}</title>
    <style>
      body{font-family:Georgia,serif;color:#0b1d3a;max-width:720px;margin:32px auto;padding:0 20px;line-height:1.6}
      h1{font-size:26px;margin-bottom:4px} h2{font-size:18px;margin-top:24px;border-bottom:1px solid #c9a227;padding-bottom:4px}
      h3{font-size:16px;margin-top:18px} .meta{color:#6b5a1e;font-size:13px}
      .prayer{font-style:italic;background:#faf7f0;padding:12px;border-left:3px solid #c9a227}
      footer{margin-top:32px;font-size:12px;color:#555}
    </style></head><body>
    <h1>${esc(s.title)}</h1>
    <p class="meta">Main text: ${esc(s.mainText)} · ${esc(s.duration)} · ${esc(s.format)} · ${esc(s.topic)}</p>
    <p class="meta">Audience: ${esc(s.audience)}</p>
    <h2>Theme</h2><p>${esc(s.theme)}</p>
    <h2>Introduction</h2><p>${esc(s.introduction)}</p>
    <h2>Historical and biblical context</h2><p>${esc(s.context)}</p>
    <h2>Main teaching points</h2>${points}
    <h2>Illustration</h2><p>${esc(s.illustration)}</p>
    <h2>Practical applications</h2><ul>${s.applications.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    <h2>Questions for group discussion</h2><ol>${s.discussion.map((d) => `<li>${esc(d)}</li>`).join("")}</ol>
    <h2>Conclusion</h2><p>${esc(s.conclusion)}</p>
    ${s.invitation ? `<h2>Invitation to respond</h2><p>${esc(s.invitation)}</p>` : ""}
    <h2>Suggested prayer</h2><p class="prayer">${esc(s.prayer)}</p>
    <footer>Bible Stories Live - Global Gospel Mission. Scripture quotations are from the King James Version (public domain).</footer>
    </body></html>`);
  w.document.close();
  w.focus();
  w.print();
};

export const SermonLibrary = () => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>("all");
  const [onlySaved, setOnlySaved] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const { isBookmarked, toggleBookmark, count } = useBookmarks();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERMONS.filter((s) => {
      if (duration !== "all" && s.duration !== duration) return false;
      if (onlySaved && !isBookmarked({ kind: "sermon", id: s.id })) return false;
      if (!q) return true;
      const haystack = [s.title, s.mainText, s.topic, s.audience, s.theme, s.format, s.introduction]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, duration, onlySaved, isBookmarked]);

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">For Preachers</h1>
        <p className="text-sm text-[#0b1d3a]/70">
          Full manuscripts you can read aloud and adapt. {SERMONS.length} complete resources so far.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-[#c9a227]/30 bg-white p-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by topic, Scripture, audience or title"
          aria-label="Search sermons"
          className="w-full rounded-full border border-[#0b1d3a]/20 px-4 py-2 text-sm outline-none focus:border-[#c9a227]"
        />
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <label htmlFor="duration" className="font-semibold">Duration:</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value as (typeof DURATIONS)[number])}
            className="rounded-full border border-[#0b1d3a]/20 px-3 py-1"
          >
            {DURATIONS.map((d) => (
              <option key={d} value={d}>{d === "all" ? "All durations" : d}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setOnlySaved((v) => !v)}
            aria-pressed={onlySaved}
            className={`rounded-full border px-3 py-1 font-semibold ${
              onlySaved ? "border-[#c9a227] bg-[#c9a227]" : "border-[#0b1d3a]/30"
            }`}
          >
            Saved only ({count})
          </button>
        </div>
      </div>

      {results.length === 0 && (
        <p className="rounded-2xl border border-dashed border-[#0b1d3a]/30 p-6 text-center text-sm">
          No sermons match your search. Try a different word or clear the filters.
        </p>
      )}

      {results.map((s) => {
        const open = openId === s.id;
        return (
          <article key={s.id} className="rounded-2xl border border-[#c9a227]/30 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-[#9a7b12]">
                  {s.duration} · {s.format} · {s.topic}
                </p>
                <h2 className="mt-1 text-lg font-bold">{s.title}</h2>
                <p className="mt-1 text-sm">
                  Main text: <span className="font-semibold">{s.mainText}</span>
                </p>
              </div>
              <BookmarkButton
                label={s.title}
                saved={isBookmarked({ kind: "sermon", id: s.id })}
                onToggle={() => toggleBookmark({ kind: "sermon", id: s.id })}
              />
            </div>
            <p className="mt-2 text-sm text-[#0b1d3a]/80">{s.theme}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : s.id)}
                className="rounded-full bg-[#0b1d3a] px-4 py-2 text-sm font-semibold text-white"
              >
                {open ? "Hide manuscript" : "Read full manuscript"}
              </button>
              <button
                type="button"
                onClick={() => printSermon(s)}
                className="rounded-full border border-[#0b1d3a] px-4 py-2 text-sm font-semibold text-[#0b1d3a]"
              >
                Print / Save as PDF
              </button>
              <a
                href={bibleLink(s.mainText)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#0b1d3a] px-4 py-2 text-sm font-semibold text-[#0b1d3a]"
              >
                Open Scripture
              </a>
            </div>

            {open && (
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p className="text-xs text-[#0b1d3a]/70">Audience: {s.audience}</p>
                <div>
                  <h3 className="font-bold">Introduction</h3>
                  <p>{s.introduction}</p>
                </div>
                <div>
                  <h3 className="font-bold">Historical and biblical context</h3>
                  <p>{s.context}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold">Main teaching points</h3>
                  {s.points.map((p) => (
                    <div key={p.heading}>
                      <p className="font-semibold">{p.heading}</p>
                      <p>{p.explanation}</p>
                      <ul className="ml-5 list-disc text-[#0b1d3a]/80">
                        {p.scriptures.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold">Illustration</h3>
                  <p>{s.illustration}</p>
                </div>
                <div>
                  <h3 className="font-bold">Practical applications</h3>
                  <ul className="ml-5 list-disc">
                    {s.applications.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Questions for group discussion</h3>
                  <ol className="ml-5 list-decimal">
                    {s.discussion.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="font-bold">Conclusion</h3>
                  <p>{s.conclusion}</p>
                </div>
                {s.invitation && (
                  <div>
                    <h3 className="font-bold">Invitation to respond</h3>
                    <p>{s.invitation}</p>
                  </div>
                )}
                <div className="rounded-xl bg-[#faf7f0] p-4 italic">
                  <h3 className="font-bold not-italic">Suggested prayer</h3>
                  <p>{s.prayer}</p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};
