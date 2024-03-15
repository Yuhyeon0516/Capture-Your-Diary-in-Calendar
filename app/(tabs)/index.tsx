import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Calendar from "@/components/home/Calendar";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import LogoHeader from "@/components/common/LogoHeader";
import HomeHeaderRightComponent from "@/components/home/HomeHeaderRightComponent";

export default function index() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LogoHeader rightComponent={() => <HomeHeaderRightComponent />} />
      <Calendar />

      <TouchableOpacity
        style={[styles.floatingButton, { bottom: tabBarHeight + 15 }]}
      >
        <FontAwesome name="plus" color={"white"} size={32} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    position: "absolute",
    right: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
