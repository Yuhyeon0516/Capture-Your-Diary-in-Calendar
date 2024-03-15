import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          bottom: 0,
        },
        tabBarInactiveTintColor: Colors.primary,
        tabBarActiveTintColor: Colors.white,
      }}
      sceneContainerStyle={{
        backgroundColor: "whitesmoke",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "홈",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={[
                focused ? styles.activeIcon : styles.inactiveIcon,
                styles.tabbarIcon,
              ]}
            >
              <Ionicons name={"home-outline"} color={color} size={size} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="share"
        options={{
          tabBarLabel: "공유",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={[
                focused ? styles.activeIcon : styles.inactiveIcon,
                styles.tabbarIcon,
              ]}
            >
              <Ionicons name={"share-outline"} color={color} size={size} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "프로필",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={[
                focused ? styles.activeIcon : styles.inactiveIcon,
                styles.tabbarIcon,
              ]}
            >
              <Ionicons name={"person-outline"} color={color} size={size} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    backgroundColor: Colors.primary,
  },
  inactiveIcon: {
    backgroundColor: Colors.white,
  },
  tabbarIcon: {
    padding: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
