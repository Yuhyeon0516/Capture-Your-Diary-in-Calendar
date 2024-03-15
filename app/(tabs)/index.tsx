import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Calendar from "@/components/home/Calendar";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calendar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
