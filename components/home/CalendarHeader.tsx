import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { getDayColor, getDayText } from "@/utils/util";
import dayjs from "dayjs";
import Colors from "@/constants/Colors";
import CalendarArrowButton from "./CalendarArrowButton";
import CalendarColumn from "./CalendarColumn";

type CalendarHeaderProp = {
  selectedDate: dayjs.Dayjs;
  addOneMonth: () => void;
  subtractOneMonth: () => void;
};

export default function CalendarHeader({
  selectedDate,
  addOneMonth,
  subtractOneMonth,
}: CalendarHeaderProp) {
  const currentDateText = dayjs(selectedDate).format("YYYY.MM");
  const todayText = dayjs().format("YYYY.MM");

  return (
    <View>
      <View style={styles.calendarHeaderTitleContainer}>
        <CalendarArrowButton
          direction="left"
          onPress={subtractOneMonth}
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
          onPress={addOneMonth}
          iconColor={
            currentDateText === todayText ? Colors.gray : Colors.primary
          }
          iconSize={32}
          disabled={currentDateText === todayText ? true : false}
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
              isDisabled
            />
          );
        })}
      </View>
    </View>
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
