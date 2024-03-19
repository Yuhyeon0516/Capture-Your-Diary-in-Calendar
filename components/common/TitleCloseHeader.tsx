import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type TitleCloseHeaderProp = {
  title: string;
  description: string;
};

export default function TitleCloseHeader({
  title,
  description,
}: TitleCloseHeaderProp) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={{ padding: 4 }} onPress={() => router.back()}>
        <Ionicons name="close" color={Colors.black} size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    paddingVertical: 10,
    gap: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
  },
  description: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
});
