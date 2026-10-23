import type { Bookmark } from "@/hooks/useBookmarks";

interface BookmarkButtonProps {
  saved: boolean;
  onToggle: () => void;
  label: string;
}

export const BookmarkButton = ({ saved, onToggle, label }: BookmarkButtonProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-pressed={saved}
    aria-label={saved ? `Remove bookmark: ${label}` : `Bookmark: ${label}`}
    className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold transition ${
      saved ? "border-[#c9a227] bg-[#c9a227] text-[#0b1d3a]" : "border-[#0b1d3a]/30 text-[#0b1d3a]"
    }`}
  >
    {saved ? "★ Saved" : "☆ Save"}
  </button>
);

export type { Bookmark };
