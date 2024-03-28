import React from "react";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="licence" options={{ presentation: "modal" }} />
      <Stack.Screen name="inquire" options={{ presentation: "modal" }} />
      <Stack.Screen name="question" options={{ presentation: "modal" }} />
    </Stack>
  );
}
