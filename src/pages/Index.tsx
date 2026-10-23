import { useMemo, useState } from "react";
import { STORIES, type Testament } from "@/data/stories";
import { QUESTIONS_PART1 } from "@/data/questions-part1";
import { QUESTIONS_PART2 } from "@/data/questions-part2";

const ALL_QUESTIONS = [...QUESTIONS_PART1, ...QUESTIONS_PART2];
const QUESTION_CATEGORIES = Array.from(new Set(ALL_QUESTIONS.map((q) => q.category)));

type Tab = "home" | "stories" | "questions" | "preachers" | "membership";

const TABS: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "stories", label: "Bible Stories" },
  { id: "questions", label: "Hard Questions" },
  { id: "preachers", label: "For Preachers" },
  { id: "membership", label: "Membership" },
];

const bibleLink = (ref: string) =>
  `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}`;
const youtubeLink = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

const QUESTIONS = [
  {
    category: "The cross, forgiveness, and grace",
    q: "Does God forgive sin without the cross?",
    a: "Scripture ties forgiveness to the death of Christ. Hebrews 9:22 says, \"without the shedding of blood there is no forgiveness.\" Romans 3:25 presents Jesus as the one whom God put forward as a sacrifice of atonement. Forgiveness is available through God's grace, and it rests on the work of Christ.",
    refs: "Hebrews 9:22; Romans 3:23-26; Ephesians 1:7",
    misunderstanding: "God simply overlooks sin because He is loving. Scripture shows God is both just and the justifier of those who trust Jesus.",
  },
  {
    category: "Money, giving, and prosperity",
    q: "Is tithing compulsory for Christians today?",
    a: "Tithing was a requirement under the Mosaic Law for Israel. The New Testament does not command Christians to tithe. It teaches cheerful, generous, planned giving from the heart. Christians should give generously and support their church and those in need, but giving is not a payment to buy God's favour.",
    refs: "Malachi 3:10; Galatians 3:24-25; 2 Corinthians 9:7; 1 Corinthians 16:2",
    misunderstanding: "Believers differ in how they apply Old Testament giving principles. Some see tithing as a helpful guide, while others see it as fulfilled in Christ. Both groups agree that generosity matters.",
  },
  {
    category: "Prophecy and spiritual gifts",
    q: "How can we test a prophecy biblically?",
    a: "Scripture commands believers to test prophecy. Deuteronomy 18:21-22 says a prophet who speaks in the Lord's name and whose words do not come true has not spoken for the Lord. 1 Thessalonians 5:20-21 says, \"Do not treat prophecies with contempt... Test them all; hold on to what is good.\" A message must also agree with Scripture and honour Christ.",
    refs: "Deuteronomy 18:21-22; 1 Thessalonians 5:20-21; 1 John 4:1",
    misunderstanding: "Every sincere-sounding message is from God. Scripture tells us to examine every message, including those from popular preachers.",
  },
];

const RESOURCES = [
  { title: "The Gospel in Genesis to Revelation", type: "30-minute sermon", text: "John 3:16", theme: "Repentance and salvation" },
  { title: "Faith That Obeys", type: "15-minute teaching", text: "James 2:14-26", theme: "Faith and obedience" },
  { title: "Holy Spirit Who Helps Us", type: "45-minute study", text: "John 14:15-27", theme: "Holy Spirit teachings" },
  { title: "Hope in the Middle of Suffering", type: "Devotional", text: "Romans 5:3-5", theme: "Suffering, perseverance, and hope" },
];

const DEVOTIONAL = {
  verseRef: "Psalm 119:105",
  verse: "Your word is a lamp for my feet, a light on my path.",
  devotional:
    "Scripture guides us one step at a time. We do not need to see the whole road to walk faithfully today.",
  question: "Which part of God's Word do I need to read carefully today?",
  action: "Read one passage slowly and write down one thing it teaches about God.",
  prayer: "Lord, make Your Word a lamp to my feet. Help me walk in it today.",
};

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

  const featured = STORIES.find((s) => s.id === "creation") ?? STORIES[0];

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
          <div>
            <p className="text-base font-bold leading-tight sm:text-lg">Bible Stories Live</p>
            <p className="text-xs text-[#e8d28a]">Global Gospel Mission</p>
          </div>
          <nav className="hidden gap-1 md:flex">
            {TABS.map((t) => (
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
              <p className="mt-2 text-lg italic">"{DEVOTIONAL.verse}"</p>
              <p className="mt-1 text-sm text-[#e8d28a]">{DEVOTIONAL.verseRef}</p>
              <p className="mt-4 text-sm text-white/90">{DEVOTIONAL.devotional}</p>
              <p className="mt-3 text-sm"><span className="font-semibold text-[#e8d28a]">Prayer: </span>{DEVOTIONAL.prayer}</p>
            </Card>

            <div>
              <h2 className="mb-3 text-lg font-bold">Recently added resources</h2>
              <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2">
                {RESOURCES.map((r) => (
                  <Card key={r.title} className="min-w-[260px] snap-start">
                    <p className="text-xs text-[#9a7b12]">{r.type}</p>
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
                <p className="text-xs text-[#9a7b12]">{s.testament} · {s.book} · {s.ref}</p>
                <h2 className="mt-1 text-lg font-bold">{s.title}</h2>
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
                <p className="text-xs text-[#9a7b12]">{q.category}</p>
                <h2 className="mt-1 text-lg font-bold">{q.question}</h2>
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
        {tab === "preachers" && (
          <section className="space-y-4">
            <h1 className="text-2xl font-bold">For Preachers</h1>
            <p className="text-sm text-[#0b1d3a]/70">Teaching resources you can read aloud and adapt for your church.</p>
            {RESOURCES.map((r) => (
              <Card key={r.title}>
                <p className="text-xs text-[#9a7b12]">{r.type} · {r.theme}</p>
                <h2 className="mt-1 text-lg font-bold">{r.title}</h2>
                <p className="mt-1 text-sm">Main text: <span className="font-semibold">{r.text}</span></p>
                <div className="mt-3">
                  <Button href={bibleLink(r.text)}>Open Scripture</Button>
                </div>
              </Card>
            ))}
            <p className="text-xs text-[#0b1d3a]/60">Full manuscripts, search, bookmarks and PDF export are coming in the next version.</p>
          </section>
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
          </section>
        )}
      </main>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-[#c9a227]/40 bg-[#0b1d3a] md:hidden">
        {TABS.map((t) => (
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
