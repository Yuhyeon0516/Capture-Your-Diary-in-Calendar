import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleCloseHeader from "@/components/common/TitleCloseHeader";

export default function register() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleCloseHeader title="회원가입" description="" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
