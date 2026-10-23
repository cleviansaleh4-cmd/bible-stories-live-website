import { useMemo } from "react";
import { STORIES } from "@/data/stories";
import { QUESTIONS_PART1 } from "@/data/questions-part1";
import { QUESTIONS_PART2 } from "@/data/questions-part2";
import { SERMONS } from "@/data/sermons";

const ALL_QUESTIONS = [...QUESTIONS_PART1, ...QUESTIONS_PART2];

interface GlobalSearchProps {
  query: string;
  onOpenStory: (id: string) => void;
  onOpenQuestion: (id: string) => void;
  onOpenSermon: (id: string) => void;
}

const matches = (haystack: string[], q: string) =>
  haystack.join(" ").toLowerCase().includes(q);

export const GlobalSearch = ({ query, onOpenStory, onOpenQuestion, onOpenSermon }: GlobalSearchProps) => {
  const q = query.trim().toLowerCase();

  const stories = useMemo(
    () =>
      q
        ? STORIES.filter((s) => matches([s.title, s.book, s.ref, s.story, s.lesson], q))
        : [],
    [q]
  );
  const questions = useMemo(
    () =>
      q
        ? ALL_QUESTIONS.filter((x) => matches([x.question, x.answer, x.passages, x.category], q))
        : [],
    [q]
  );
  const sermons = useMemo(
    () =>
      q
        ? SERMONS.filter((s) => matches([s.title, s.mainText, s.topic, s.theme, s.introduction], q))
        : [],
    [q]
  );

  const total = stories.length + questions.length + sermons.length;

  const sectionTitle = "text-xs font-semibold uppercase tracking-wide text-[#9a7b12]";
  const row =
    "w-full rounded-2xl border border-[#c9a227]/30 bg-white p-4 text-left shadow-sm transition hover:border-[#c9a227]";

  return (
    <section className="space-y-5" aria-label="Search results">
      <div>
        <h1 className="text-2xl font-bold">Search results</h1>
        <p className="text-sm text-[#0b1d3a]/70">
          {total} {total === 1 ? "result" : "results"} for “{query.trim()}”
        </p>
      </div>

      {total === 0 && (
        <p className="rounded-2xl border border-dashed border-[#0b1d3a]/30 p-6 text-center text-sm">
          Nothing matched. Try a Bible character, book, passage or topic, such as “Joseph”, “Romans” or “prayer”.
        </p>
      )}

      {stories.length > 0 && (
        <div className="space-y-2">
          <p className={sectionTitle}>Bible stories ({stories.length})</p>
          {stories.map((s) => (
            <button key={s.id} type="button" onClick={() => onOpenStory(s.id)} className={row}>
              <p className="text-xs text-[#9a7b12]">{s.book} · {s.ref}</p>
              <p className="mt-1 font-bold">{s.title}</p>
            </button>
          ))}
        </div>
      )}

      {questions.length > 0 && (
        <div className="space-y-2">
          <p className={sectionTitle}>Hard questions ({questions.length})</p>
          {questions.map((x) => (
            <button key={x.id} type="button" onClick={() => onOpenQuestion(x.id)} className={row}>
              <p className="text-xs text-[#9a7b12]">{x.category}</p>
              <p className="mt-1 font-bold">{x.question}</p>
            </button>
          ))}
        </div>
      )}

      {sermons.length > 0 && (
        <div className="space-y-2">
          <p className={sectionTitle}>Sermons and teachings ({sermons.length})</p>
          {sermons.map((s) => (
            <button key={s.id} type="button" onClick={() => onOpenSermon(s.id)} className={row}>
              <p className="text-xs text-[#9a7b12]">{s.duration} · {s.topic}</p>
              <p className="mt-1 font-bold">{s.title}</p>
              <p className="mt-1 text-sm text-[#0b1d3a]/70">Main text: {s.mainText}</p>
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
