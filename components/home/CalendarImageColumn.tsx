import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { getCalendarColumnSize } from "@/utils/util";
import Colors from "@/constants/Colors";

const COLUMN_SIZE = getCalendarColumnSize();

type CalendarImageColumnProp = {
  text: string;
  color: string;
  isDisabled: boolean;
  imagePath: string;
};

export default function CalendarImageColumn({
  text,
  color,
  isDisabled,
  imagePath,
}: CalendarImageColumnProp) {
  return (
    <TouchableOpacity style={styles.column} disabled={isDisabled}>
      <Image
        source={{ uri: imagePath }}
        width={COLUMN_SIZE - 5}
        height={COLUMN_SIZE - 5}
        style={{ borderRadius: 8 }}
      />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.white }}>
          {text}
        </Text>
      </View>
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
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  text: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
});
