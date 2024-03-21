import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type SectionTitleProp = {
  text: string;
};

export default function SectionTitle({ text }: SectionTitleProp) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontSize: 28,
    fontWeight: "900",
    color: Colors.black,
  },
});
