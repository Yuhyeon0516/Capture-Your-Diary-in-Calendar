import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CalendarArrowButtonProp = {
  direction: "left" | "right";
  onPress: () => void;
  iconSize: number;
  iconColor: string;
  disabled?: boolean;
};

export default function CalendarArrowButton({
  direction,
  onPress,
  iconSize,
  iconColor,
  disabled = false,
}: CalendarArrowButtonProp) {
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 20, paddingVertical: 15 }}
      onPress={onPress}
      disabled={disabled}
    >
      {direction === "left" ? (
        <MaterialCommunityIcons
          name="chevron-left"
          size={iconSize}
          color={iconColor}
        />
      ) : (
        <MaterialCommunityIcons
          name="chevron-right"
          size={iconSize}
          color={iconColor}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
