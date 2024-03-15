import dayjs from "dayjs";
import { Dimensions } from "react-native";

export function fillEmptyColumns(
  columns: dayjs.Dayjs[],
  start: dayjs.Dayjs,
  end: dayjs.Dayjs
) {
  const filledColumns = columns.slice(0);

  // 1. 첫날 이전 공백 채우기
  const startDay = dayjs(start).get("day");
  for (let i = 1; i <= startDay; i += 1) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date);
  }
  // 2. 마지막날 이후 공백 채우기
  const endDay = dayjs(end).get("day");
  /**
    0 -> 6
    1 -> 5
    2 -> 4
    endDay + ? = 6
    */
  for (let i = 1; i <= 6 - endDay; i += 1) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date);
  }

  return filledColumns;
}

export function getCalendarColumns(now: dayjs.Dayjs) {
  const start = dayjs(now).startOf("month"); // 3월 1일
  const end = dayjs(now).endOf("month"); // 3월 31일
  const endDate = dayjs(end).get("date"); // 31

  const columns = [];

  for (let i = 0; i < endDate; i += 1) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }

  const filledColumns = fillEmptyColumns(columns, start, end);
  return filledColumns;
}

export function getDayText(day: number) {
  const dayTextx = ["일", "월", "화", "수", "목", "금", "토"];

  return dayTextx[day];
}

export function getDayColor(day: number) {
  return day === 0 ? "#F52C2D" : day === 6 ? "#1E35AA" : "#2B2B2B";
}

export function getCalendarColumnSize() {
  const { width } = Dimensions.get("window");

  return (width - 40) / 7;
}
