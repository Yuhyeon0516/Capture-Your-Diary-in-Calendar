import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { getCalendarColumns } from "@/utils/util";
import dayjs from "dayjs";
import { useCalendar } from "@/hooks/useCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarRenderItem from "./CalendarRenderItem";

export default function Calendar() {
  const { selectedDate, addOneMonth, subtractOneMonth } = useCalendar(dayjs());
  const colums = getCalendarColumns(selectedDate);

  return (
    <FlatList
      data={colums}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <CalendarRenderItem date={item} selectedDate={selectedDate} />
      )}
      numColumns={7}
      ListHeaderComponent={() => (
        <CalendarHeader
          selectedDate={selectedDate}
          addOneMonth={addOneMonth}
          subtractOneMonth={subtractOneMonth}
        />
      )}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
