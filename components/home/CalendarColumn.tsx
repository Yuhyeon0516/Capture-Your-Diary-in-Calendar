import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { getCalendarColumnSize } from "@/util/util";

const COLUMN_SIZE = getCalendarColumnSize();

type CalendarColumnProp = {
  text: string;
  color: string;
  opacity: number;
};

export default function CalendarColumn({
  text,
  color,
  opacity,
}: CalendarColumnProp) {
  return (
    <TouchableOpacity style={styles.column}>
      <Text style={{ color, fontSize: 16, fontWeight: "bold", opacity }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  column: {
    width: COLUMN_SIZE,
    height: COLUMN_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
});
