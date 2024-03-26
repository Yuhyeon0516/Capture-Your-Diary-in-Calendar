import { Diary } from "@/types/diary";
import { atom } from "recoil";

export const SCREENTYPE = atom<"auth" | "main" | null>({
  default: null,
  key: "SCREENTYPE",
});

export const DIARY = atom<Diary[]>({
  default: [],
  key: "DIARY",
});
