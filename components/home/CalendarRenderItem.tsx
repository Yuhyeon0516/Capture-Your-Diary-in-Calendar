import React from "react";
import { getDayColor } from "@/utils/util";
import dayjs from "dayjs";
import CalendarColumn from "./CalendarColumn";
import { useRecoilValue } from "recoil";
import { DIARY } from "@/utils/recoil";
import CalendarImageColumn from "./CalendarImageColumn";

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
  const diary = useRecoilValue(DIARY);

  const isImage = diary.filter((value) =>
    dayjs(value.created_at).isSame(date, "date")
  );

  if (isImage.length) {
    return (
      <CalendarImageColumn
        text={dateText}
        color={color}
        isDisabled={isCurrentMonth ? false : true}
        imagePath={isImage[0].image_path}
      />
    );
  }

  return (
    <CalendarColumn
      text={dateText}
      color={color}
      opacity={isCurrentMonth ? 1 : 0.4}
    />
  );
}
