import {
  ActivityIndicator,
  Alert,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TitleCloseHeader from "@/components/common/TitleCloseHeader";
import AddDiary from "@/components/addDiary/AddDiary";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

export default function AddDiaryPage() {
  const safeAreaInsets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted) {
        Alert.alert(
          "앨범 접근 권한을 허용해주세요.",
          "하루를 추가하려면 사진 업로드를 위해 설정에서 사진 접근 권한을 허용해주세요.",
          [
            {
              text: "확인",
              onPress: () => {
                router.back();
              },
            },
          ]
        );
      }
    })();
  }, []);

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
