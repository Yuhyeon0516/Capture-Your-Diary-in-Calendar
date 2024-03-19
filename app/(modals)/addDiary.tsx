import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TitleCloseHeader from "@/components/common/TitleCloseHeader";
import AddDiary from "@/components/addDiary/AddDiary";

export default function AddDiaryPage() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        Platform.OS === "android"
          ? { paddingTop: safeAreaInsets.top }
          : { paddingTop: 0 },
      ]}
    >
      <TitleCloseHeader
        title="하루 추가"
        description="여러분의 하루를 사진과 함께 알려주세요!"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardDismissMode="interactive"
      >
        <AddDiary />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});
