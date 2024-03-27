import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type BackTitleHeaderProps = {
  text: string;
};

export default function BackTitleHeader({ text }: BackTitleHeaderProps) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.icon} onPress={() => router.back()}>
        <MaterialIcons name="chevron-left" size={30} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
  },
  icon: {
    position: "absolute",
    left: -10,
    padding: 4,
  },
});
