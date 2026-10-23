import { SERMONS_A, type Sermon } from "./sermons-a";
import { SERMONS_B } from "./sermons-b";
import { SERMONS_C } from "./sermons-c";
import { SERMONS_D } from "./sermons-d";
import { SERMONS_E } from "./sermons-e";
import { SERMONS_F } from "./sermons-f";
import { SERMONS_G } from "./sermons-g";
import { SERMONS_H } from "./sermons-h";
import { SERMONS_I } from "./sermons-i";

export type { Sermon, SermonPoint } from "./sermons-a";

// Combine all sermon files. If an id appears more than once, the first copy is kept
// so bookmarks and links stay stable and no sermon is listed twice.
const uniqueById = (list: Sermon[]): Sermon[] => {
  const seen = new Set<string>();
  return list.filter((s) => {
    if (seen.has(s.id)) return false;
    seen.add(s.id);
    return true;
  });
};

export const SERMONS: Sermon[] = uniqueById([
  ...SERMONS_A,
  ...SERMONS_B,
  ...SERMONS_C,
  ...SERMONS_D,
  ...SERMONS_E,
  ...SERMONS_F,
  ...SERMONS_G,
  ...SERMONS_H,
  ...SERMONS_I,
]);
