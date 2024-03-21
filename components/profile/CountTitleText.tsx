import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type CountTitleTextProps = {
  title: string;
  count: number;
};

export default function CountTitleText({ title, count }: CountTitleTextProps) {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
