import React from "react";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="licence" />
      <Stack.Screen name="inquire" />
      <Stack.Screen name="question" />
    </Stack>
  );
}
