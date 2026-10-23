import { useMemo, useState } from "react";
import { STORIES, type Testament } from "@/data/stories";
import { QUESTIONS_PART1 } from "@/data/questions-part1";
import { QUESTIONS_PART2 } from "@/data/questions-part2";
import { SermonLibrary } from "@/components/preachers/SermonLibrary";
import { GlobalSearch } from "@/components/GlobalSearch";
import { BookmarkButton } from "@/components/preachers/BookmarkButton";
import { useBookmarks } from "@/hooks/useBookmarks";
import { SavedItems } from "@/components/SavedItems";
import { MembershipForm } from "@/components/membership/MembershipForm";
import { DEVOTIONALS } from "@/data/devotionals";
import { SERMONS } from "@/data/sermons";

const ALL_QUESTIONS = [...QUESTIONS_PART1, ...QUESTIONS_PART2];
const QUESTION_CATEGORIES = Array.from(new Set(ALL_QUESTIONS.map((q) => q.category)));

type Tab = "home" | "stories" | "questions" | "preachers" | "membership" | "search" | "saved";

const TABS: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "stories", label: "Bible Stories" },
  { id: "questions", label: "Hard Questions" },
  { id: "preachers", label: "For Preachers" },
  { id: "membership", label: "Membership" },
];

const SAVED_TAB = { id: "saved" as Tab, label: "Saved" };

const bibleLink = (ref: string) =>
  `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}`;
const youtubeLink = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

const WHATSAPP = "https://wa.me/254746648097";

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-[#c9a227]/30 bg-white p-5 shadow-sm ${className}`}>{children}</div>
);

const Button = ({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90 ${
      primary ? "bg-[#c9a227] text-[#0b1d3a]" : "border border-[#0b1d3a] text-[#0b1d3a]"
    }`}
  >
    {children}
  </a>
);

type TestamentFilter = "all" | Testament;

export default function Index() {
  const [tab, setTab] = useState<Tab>("home");
  const [openStory, setOpenStory] = useState<string | null>(null);
  const [storyQuery, setStoryQuery] = useState("");
  const [storyTestament, setStoryTestament] = useState<TestamentFilter>("all");
  const [openQ, setOpenQ] = useState<string | null>(null);
  const [qSearch, setQSearch] = useState("");
  const [qCat, setQCat] = useState<string>("all");
  const [globalQuery, setGlobalQuery] = useState("");
  const [focusSermon, setFocusSermon] = useState<string | null>(null);
  const { isBookmarked, toggleBookmark, count: savedCount } = useBookmarks();

  const featured = STORIES.find((s) => s.id === "creation") ?? STORIES[0];
  const todays = DEVOTIONALS[new Date().getDay() % DEVOTIONALS.length];

  const filteredQuestions = useMemo(() => {
    const q = qSearch.trim().toLowerCase();
    return ALL_QUESTIONS.filter((item) => {
      if (qCat !== "all" && item.category !== qCat) return false;
      if (!q) return true;
      return [item.question, item.answer, item.passages, item.category]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [qSearch, qCat]);

  const filteredStories = useMemo(() => {
    const q = storyQuery.trim().toLowerCase();
    return STORIES.filter((s) => {
      if (storyTestament !== "all" && s.testament !== storyTestament) return false;
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.book.toLowerCase().includes(q) ||
        s.ref.toLowerCase().includes(q) ||
        s.story.toLowerCase().includes(q)
      );
    });
  }, [storyQuery, storyTestament]);

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#0b1d3a]">
      {/* Header + desktop navigation */}
      <header className="sticky top-0 z-20 bg-[#0b1d3a] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="shrink-0">
            <p className="text-base font-bold leading-tight sm:text-lg">Bible Stories Live</p>
            <p className="text-xs text-[#e8d28a]">Global Gospel Mission</p>
          </div>
          <input
            type="search"
            value={globalQuery}
            onChange={(e) => {
              setGlobalQuery(e.target.value);
              if (e.target.value.trim()) setTab("search");
            }}
            placeholder="Search stories, questions, sermons"
            aria-label="Search the whole site"
            className="hidden min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 outline-none focus:bg-white/20 md:block md:max-w-sm"
          />
          <nav className="hidden gap-1 md:flex">
            {[...TABS, SAVED_TAB].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  tab === t.id ? "bg-[#c9a227] font-semibold text-[#0b1d3a]" : "text-white hover:bg-white/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-28 pt-6 md:pb-12">
        <div className="mb-4 md:hidden">
          <input
            type="search"
            value={globalQuery}
            onChange={(e) => {
              setGlobalQuery(e.target.value);
              if (e.target.value.trim()) setTab("search");
            }}
            placeholder="Search stories, questions, sermons"
            aria-label="Search the whole site on mobile"
            className="w-full rounded-full border border-[#c9a227]/50 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#c9a227]"
          />
        </div>
        {/* HOME */}
        {tab === "home" && (
          <section className="space-y-6">
            <div className="rounded-2xl bg-[#0b1d3a] p-6 text-white sm:p-8">
              <h1 className="text-2xl font-bold sm:text-3xl">Welcome, friend. Come and explore the Bible.</h1>
              <p className="mt-3 text-sm text-white/85 sm:text-base">
                Learn Bible stories, examine hard questions with Scripture, and prepare biblical messages.
              </p>
            </div>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#9a7b12]">Featured story</p>
              <h2 className="mt-1 text-xl font-bold">{featured.title}</h2>
              <p className="mt-2 text-sm leading-relaxed">{featured.story}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button href={bibleLink(featured.ref)} primary>Read the Scripture</Button>
                <Button href={youtubeLink(featured.watch)}>Watch the Bible Story</Button>
              </div>
            </Card>

            <Card className="bg-[#0b1d3a] text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#e8d28a]">Daily Scripture</p>
              <p className="mt-2 text-lg italic">"{todays.verse}"</p>
              <p className="mt-1 text-sm text-[#e8d28a]">{todays.verseRef}</p>
              <p className="mt-4 text-sm text-white/90">{todays.devotional}</p>
              <p className="mt-3 text-sm"><span className="font-semibold text-[#e8d28a]">Reflection: </span>{todays.reflection}</p>
              <p className="mt-2 text-sm"><span className="font-semibold text-[#e8d28a]">Action today: </span>{todays.action}</p>
              <p className="mt-2 text-sm"><span className="font-semibold text-[#e8d28a]">Prayer: </span>{todays.prayer}</p>
            </Card>

            <div>
              <h2 className="mb-3 text-lg font-bold">Recently added resources</h2>
              <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2">
                {SERMONS.slice(0, 8).map((r) => (
                  <Card key={r.id} className="min-w-[260px] snap-start">
                    <p className="text-xs text-[#9a7b12]">{r.duration} · {r.format}</p>
                    <h3 className="mt-1 font-bold">{r.title}</h3>
                    <p className="mt-1 text-sm text-[#0b1d3a]/70">{r.theme}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BIBLE STORIES */}
        {tab === "stories" && (
          <section className="space-y-4">
            <h1 className="text-2xl font-bold">Bible Stories</h1>
            <p className="text-sm text-[#0b1d3a]/70">
              Stories from Genesis to Revelation. {STORIES.length} stories are available so far, and more will be added over time.
            </p>

            <input
              type="search"
              value={storyQuery}
              onChange={(e) => setStoryQuery(e.target.value)}
              placeholder="Search by character, book, passage or topic"
              className="w-full rounded-full border border-[#c9a227]/50 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#c9a227]"
              aria-label="Search Bible stories"
            />

            <div className="flex flex-wrap gap-2">
              {(["all", "Old Testament", "New Testament"] as TestamentFilter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setStoryTestament(f)}
                  className={`rounded-full px-4 py-1.5 text-sm transition ${
                    storyTestament === f
                      ? "bg-[#0b1d3a] font-semibold text-white"
                      : "border border-[#0b1d3a]/30 bg-white text-[#0b1d3a]"
                  }`}
                >
                  {f === "all" ? "All" : f}
                </button>
              ))}
            </div>

            <p className="text-xs text-[#0b1d3a]/60">Showing {filteredStories.length} of {STORIES.length} stories</p>

            {filteredStories.length === 0 && (
              <Card>
                <p className="text-sm">No stories match your search. Try a different name, book or topic.</p>
              </Card>
            )}

            {filteredStories.map((s) => (
              <Card key={s.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#9a7b12]">{s.testament} · {s.book} · {s.ref}</p>
                    <h2 className="mt-1 text-lg font-bold">{s.title}</h2>
                  </div>
                  <BookmarkButton
                    label={s.title}
                    saved={isBookmarked({ kind: "story", id: s.id })}
                    onToggle={() => toggleBookmark({ kind: "story", id: s.id })}
                  />
                </div>
                {openStory === s.id ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed">
                    <p><span className="font-semibold">Short story: </span>{s.story}</p>
                    <p><span className="font-semibold">Key lesson: </span>{s.lesson}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Button href={bibleLink(s.ref)} primary>Read the Scripture</Button>
                      <Button href={youtubeLink(s.watch)}>Watch the Bible Story</Button>
                    </div>
                    <p className="text-xs text-[#0b1d3a]/60">YouTube links open a search for this story. Videos are external and not hosted here.</p>
                    <button onClick={() => setOpenStory(null)} className="text-sm font-semibold underline">Close</button>
                  </div>
                ) : (
                  <button onClick={() => setOpenStory(s.id)} className="mt-3 text-sm font-semibold text-[#9a7b12] underline">
                    Open story
                  </button>
                )}
              </Card>
            ))}
          </section>
        )}

        {/* HARD QUESTIONS */}
        {tab === "questions" && (
          <section className="space-y-4">
            <h1 className="text-2xl font-bold">Hard Questions</h1>
            <p className="text-sm text-[#0b1d3a]/70">
              Examine Scripture for yourself. {ALL_QUESTIONS.length} answered questions so far.
            </p>
            <input
              type="search"
              value={qSearch}
              onChange={(e) => setQSearch(e.target.value)}
              placeholder="Search questions, passages or topics"
              className="w-full rounded-xl border border-[#c9a227]/40 bg-white px-4 py-3 text-sm outline-none focus:border-[#0b1d3a]"
            />
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setQCat("all")}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${qCat === "all" ? "bg-[#0b1d3a] text-white" : "border border-[#0b1d3a]/30"}`}
              >
                All
              </button>
              {QUESTION_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setQCat(c)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${qCat === c ? "bg-[#0b1d3a] text-white" : "border border-[#0b1d3a]/30"}`}
                >
                  {c}
                </button>
              ))}
            </div>
            {filteredQuestions.length === 0 && (
              <p className="text-sm">No questions match your search. Try another word.</p>
            )}
            {filteredQuestions.map((q) => (
              <Card key={q.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#9a7b12]">{q.category}</p>
                    <h2 className="mt-1 text-lg font-bold">{q.question}</h2>
                  </div>
                  <BookmarkButton
                    label={q.question}
                    saved={isBookmarked({ kind: "question", id: q.id })}
                    onToggle={() => toggleBookmark({ kind: "question", id: q.id })}
                  />
                </div>
                {openQ === q.id ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed">
                    <p><span className="font-semibold">Answer: </span>{q.answer}</p>
                    <p><span className="font-semibold">Biblical context: </span>{q.context}</p>
                    <p><span className="font-semibold">Key passages: </span>{q.passages}</p>
                    {q.interpretations && (
                      <p><span className="font-semibold">Different Christian views: </span>{q.interpretations}</p>
                    )}
                    <p><span className="font-semibold">Common misunderstanding: </span>{q.misunderstanding}</p>
                    <p><span className="font-semibold">Practical application: </span>{q.application}</p>
                    <div>
                      <p className="font-semibold">Discussion questions:</p>
                      <ul className="ml-5 list-disc">
                        {q.followUp.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <button onClick={() => setOpenQ(null)} className="text-sm font-semibold underline">Close</button>
                  </div>
                ) : (
                  <button onClick={() => setOpenQ(q.id)} className="mt-3 text-sm font-semibold text-[#9a7b12] underline">
                    Read answer
                  </button>
                )}
              </Card>
            ))}
          </section>
        )}

        {/* FOR PREACHERS */}
        {tab === "preachers" && <SermonLibrary focusId={focusSermon} />}

        {/* SEARCH RESULTS */}
        {tab === "search" && (
          <GlobalSearch
            query={globalQuery}
            onOpenStory={(id) => {
              setOpenStory(id);
              setStoryQuery("");
              setStoryTestament("all");
              setTab("stories");
            }}
            onOpenQuestion={(id) => {
              setOpenQ(id);
              setQSearch("");
              setQCat("all");
              setTab("questions");
            }}
            onOpenSermon={(id) => {
              setFocusSermon(id);
              setTab("preachers");
            }}
          />
        )}

        {/* MEMBERSHIP */}
        {tab === "membership" && (
          <section className="space-y-4">
            <h1 className="text-2xl font-bold">Membership</h1>
            <Card>
              <p className="text-sm leading-relaxed">
                Bible Stories Live is free for now. Membership will help you save stories and questions, bookmark sermons,
                follow Bible study plans and receive updates about new teaching. Membership is not yet active and no payment is required.
              </p>
              <div className="mt-4">
                <Button href={WHATSAPP} primary>More Information on WhatsApp</Button>
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-bold">Register your interest</h2>
              <p className="mt-1 text-sm text-[#0b1d3a]/70">Leave your details to be informed about new teaching. No payment is requested.</p>
              <div className="mt-4">
                <MembershipForm />
              </div>
            </Card>
          </section>
        )}

        {/* SAVED */}
        {tab === "saved" && (
          <SavedItems
            onOpenStory={(id) => {
              setOpenStory(id);
              setTab("stories");
            }}
            onOpenQuestion={(id) => {
              setOpenQ(id);
              setTab("questions");
            }}
            onOpenSermon={(id) => {
              setFocusSermon(id);
              setTab("preachers");
            }}
          />
        )}
      </main>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-6 border-t border-[#c9a227]/40 bg-[#0b1d3a] md:hidden">
        {[...TABS, SAVED_TAB].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-1 py-3 text-[11px] leading-tight ${
              tab === t.id ? "font-bold text-[#e8d28a]" : "text-white/80"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
