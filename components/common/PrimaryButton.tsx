import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type PrimaryButtonProp = {
  text: string;
  onPress: () => void;
};

export default function PrimaryButton({ text, onPress }: PrimaryButtonProp) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.primary,
    marginTop: 20,
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
