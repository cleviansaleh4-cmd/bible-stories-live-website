import { useMemo } from "react";
import { STORIES } from "@/data/stories";
import { QUESTIONS_PART1 } from "@/data/questions-part1";
import { QUESTIONS_PART2 } from "@/data/questions-part2";
import { SERMONS } from "@/data/sermons";
import { useBookmarks } from "@/hooks/useBookmarks";

const ALL_QUESTIONS = [...QUESTIONS_PART1, ...QUESTIONS_PART2];

interface SavedItemsProps {
  onOpenStory: (id: string) => void;
  onOpenQuestion: (id: string) => void;
  onOpenSermon: (id: string) => void;
}

export const SavedItems = ({ onOpenStory, onOpenQuestion, onOpenSermon }: SavedItemsProps) => {
  const { keys, toggleBookmark } = useBookmarks();

  const items = useMemo(() => {
    const out: { kind: "story" | "question" | "sermon"; id: string; title: string; sub: string }[] = [];
    for (const k of keys) {
      const [kind, ...rest] = k.split(":");
      const id = rest.join(":");
      if (kind === "story") {
        const s = STORIES.find((x) => x.id === id);
        if (s) out.push({ kind: "story", id, title: s.title, sub: `${s.book} · ${s.ref}` });
      } else if (kind === "question") {
        const q = ALL_QUESTIONS.find((x) => x.id === id);
        if (q) out.push({ kind: "question", id, title: q.question, sub: q.category });
      } else if (kind === "sermon") {
        const s = SERMONS.find((x) => x.id === id);
        if (s) out.push({ kind: "sermon", id, title: s.title, sub: `${s.duration} · ${s.topic}` });
      }
    }
    return out;
  }, [keys]);

  const openItem = (kind: string, id: string) => {
    if (kind === "story") onOpenStory(id);
    else if (kind === "question") onOpenQuestion(id);
    else onOpenSermon(id);
  };

  const label = { story: "Bible story", question: "Hard question", sermon: "Sermon" } as const;

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Saved</h1>
        <p className="text-sm text-[#0b1d3a]/70">Items you bookmarked on this device.</p>
      </div>
      {items.length === 0 && (
        <p className="rounded-2xl border border-dashed border-[#0b1d3a]/30 p-6 text-center text-sm">
          Nothing saved yet. Tap “Save” on a story, question or sermon to keep it here.
        </p>
      )}
      {items.map((it) => (
        <div key={`${it.kind}:${it.id}`} className="rounded-2xl border border-[#c9a227]/30 bg-white p-4 shadow-sm">
          <p className="text-xs text-[#9a7b12]">{label[it.kind]} · {it.sub}</p>
          <p className="mt-1 font-bold">{it.title}</p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => openItem(it.kind, it.id)}
              className="rounded-full bg-[#0b1d3a] px-4 py-2 text-sm font-semibold text-white"
            >
              Open
            </button>
            <button
              type="button"
              onClick={() => toggleBookmark({ kind: it.kind, id: it.id })}
              className="rounded-full border border-[#0b1d3a]/30 px-4 py-2 text-sm font-semibold"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
