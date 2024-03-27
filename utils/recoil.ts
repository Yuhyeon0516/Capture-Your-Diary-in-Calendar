import { Diary } from "@/types/diary";
import { User } from "@/types/user";
import { atom } from "recoil";

export const SCREENTYPE = atom<"auth" | "main" | null>({
  default: null,
  key: "SCREENTYPE",
});

export const DIARY = atom<Diary[]>({
  default: [],
  key: "DIARY",
});

export const USER = atom<User>({
  default: {
    email: "",
    userCode: "",
  },
  key: "USER",
});
