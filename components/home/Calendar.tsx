import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { getCalendarColumns, getDayColor, getDayText } from "@/util/util";
import dayjs from "dayjs";
import Colors from "@/constants/Colors";
import CalendarArrowButton from "./CalendarArrowButton";
import CalendarColumn from "./CalendarColumn";

function CalendarRenderItem({ item }: { item: dayjs.Dayjs }) {
  const dateText = dayjs(item).get("date").toString();
  const day = dayjs(item).get("day");
  const color = getDayColor(day);
  const today = dayjs();
  const isCurrentMonth = dayjs(item).isSame(today, "month");

  return (
    <CalendarColumn
      text={dateText}
      color={color}
      opacity={isCurrentMonth ? 1 : 0.4}
    />
  );
}

function CalendarHeader() {
  const currentDateText = dayjs().format("YYYY.MM");

  return (
    <View>
      <View style={styles.calendarHeaderTitleContainer}>
        <CalendarArrowButton
          direction="left"
          onPress={() => {}}
          iconColor={Colors.primary}
          iconSize={32}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{ fontSize: 24, fontWeight: "bold", color: Colors.black }}
          >
            {currentDateText}
          </Text>
        </TouchableOpacity>
        <CalendarArrowButton
          direction="right"
          onPress={() => {}}
          iconColor={Colors.primary}
          iconSize={32}
        />
      </View>

      <View style={styles.calendarHeaderDayContainer}>
        {[0, 1, 2, 3, 4, 5, 6].map((day) => {
          return (
            <CalendarColumn
              key={`day-${day}`}
              text={getDayText(day)}
              color={getDayColor(day)}
              opacity={1}
            />
          );
        })}
      </View>
    </View>
  );
}

export default function Calendar() {
  const colums = getCalendarColumns(dayjs());

  return (
    <FlatList
      data={colums}
      scrollEnabled={false}
      renderItem={CalendarRenderItem}
      numColumns={7}
      ListHeaderComponent={CalendarHeader}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendarHeaderTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarHeaderDayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
