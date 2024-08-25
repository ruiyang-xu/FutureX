import { newList as list } from "@/pages/voice/data";
import art1 from "./art/art1";
import art2 from "./art/art2";
export const newList: NewDetail[] = [
  {
    ...list[0],
    detail: art1,
  },
  {
    ...list[1],
    detail: art2,
  },
];
