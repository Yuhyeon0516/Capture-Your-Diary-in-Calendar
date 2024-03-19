import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TitleCloseHeader from "@/components/common/TitleCloseHeader";
import AddDiary from "@/components/addDiary/AddDiary";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "@/constants/Colors";

export default function AddDiaryPage() {
  const safeAreaInsets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false);

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
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <AddDiary setIsLoading={setIsLoading} />
      </KeyboardAwareScrollView>

      {isLoading && (
        <ActivityIndicator
          color={Colors.primary}
          size={"large"}
          style={{ position: "absolute" }}
          hidesWhenStopped={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
