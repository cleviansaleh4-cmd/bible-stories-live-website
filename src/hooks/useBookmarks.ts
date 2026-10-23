import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "bsl-bookmarks-v1";

export type BookmarkKind = "story" | "question" | "sermon";

export interface Bookmark {
  kind: BookmarkKind;
  id: string;
}

const keyOf = (b: Bookmark) => `${b.kind}:${b.id}`;

const readStorage = (): string[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
};

/**
 * Saves bookmarks for stories, hard questions and sermons in the browser
 * (localStorage). Bookmarks stay on the device and are not sent to any server.
 */
export function useBookmarks() {
  const [keys, setKeys] = useState<string[]>(() => readStorage());

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setKeys(readStorage());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isBookmarked = useCallback((b: Bookmark) => keys.includes(keyOf(b)), [keys]);

  const toggleBookmark = useCallback((b: Bookmark) => {
    setKeys((prev) => {
      const k = keyOf(b);
      const next = prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage may be unavailable (private mode); bookmark still works for this session.
      }
      return next;
    });
  }, []);

  return { keys, isBookmarked, toggleBookmark, count: keys.length };
}
