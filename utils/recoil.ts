import { Diary } from "@/types/diary";
import { atom } from "recoil";

export const SCREENTYPE = atom<"auth" | "main">({
  default: "auth",
  key: "SCREENTYPE",
});

export const DIARY = atom<Diary[]>({
  default: [],
  key: "DIARY",
});
