import React from "react";
import { getDayColor } from "@/utils/util";
import dayjs from "dayjs";
import CalendarColumn from "./CalendarColumn";

type CalendarRenderItemProp = {
  date: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
};

export default function CalendarRenderItem({
  date,
  selectedDate,
}: CalendarRenderItemProp) {
  const dateText = dayjs(date).get("date").toString();
  const day = dayjs(date).get("day");
  const color = getDayColor(day);
  const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");

  return (
    <CalendarColumn
      text={dateText}
      color={color}
      opacity={isCurrentMonth ? 1 : 0.4}
      isDisabled={isCurrentMonth ? false : true}
    />
  );
}
