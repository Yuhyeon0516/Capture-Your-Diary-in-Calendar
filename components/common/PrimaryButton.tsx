import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type PrimaryButtonProp = {
  text: string;
  onPress: () => void;
  marginTop?: number;
};

export default function PrimaryButton({
  text,
  onPress,
  marginTop = 20,
}: PrimaryButtonProp) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginTop: marginTop }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});
