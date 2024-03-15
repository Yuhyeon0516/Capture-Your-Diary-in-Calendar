import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function HomeHeaderRightComponent() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="bell" color={Colors.primary} size={18} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="share" color={Colors.primary} size={18} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
