import { SERMONS_A, type Sermon } from "./sermons-a";
import { SERMONS_B } from "./sermons-b";

export type { Sermon, SermonPoint } from "./sermons-a";

export const SERMONS: Sermon[] = [...SERMONS_A, ...SERMONS_B];
