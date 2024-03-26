import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function HorizontalDivider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.black,
  },
});
