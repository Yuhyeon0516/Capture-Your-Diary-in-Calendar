import { StyleSheet, View, Text } from "react-native";
import React from "react";
import SectionTitle from "./SectionTitle";
import SettingSection from "./SettingSection";
import Colors from "@/constants/Colors";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signout } from "@/utils/supabase";

export default function Settings() {
  const router = useRouter();

  async function onPressSignout() {
    await signout();
  }

  return (
    <View style={styles.container}>
      <SectionTitle text="기타" />

      <SettingSection
        title="자주 묻는 질문"
        rightIcon={() => (
          <MaterialIcons name="chevron-right" color={Colors.black} size={24} />
        )}
        leftIcon={() => (
          <MaterialIcons name="question-mark" color={Colors.black} size={24} />
        )}
        onPress={() => router.push("/profile/question")}
      />
      <SettingSection
        title="문의 및 건의하기"
        rightIcon={() => (
          <MaterialIcons name="chevron-right" color={Colors.black} size={24} />
        )}
        leftIcon={() => (
          <MaterialIcons
            name="question-answer"
            color={Colors.black}
            size={24}
          />
        )}
        onPress={() => router.push("/profile/inquire")}
      />
      <SettingSection
        title="앱 라이센스 및 오픈소스"
        rightIcon={() => (
          <MaterialIcons name="chevron-right" color={Colors.black} size={24} />
        )}
        leftIcon={() => (
          <MaterialCommunityIcons
            name="license"
            color={Colors.black}
            size={24}
          />
        )}
        onPress={() => router.push("/profile/licence")}
      />
      <SettingSection
        title="앱 버전"
        leftIcon={() => (
          <Octicons name="versions" color={Colors.black} size={24} />
        )}
        rightIcon={() => (
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: Colors.black }}
            >
              v1.0.0
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: Colors.black }}
            >
              (24.03)
            </Text>
          </View>
        )}
        onPress={() => {}}
        disabled
      />
      <SettingSection
        title="로그아웃"
        leftIcon={() => (
          <MaterialIcons name="logout" color={Colors.black} size={24} />
        )}
        onPress={onPressSignout}
      />
      <SettingSection
        title="회원탈퇴"
        leftIcon={() => (
          <FontAwesome6 name="user-xmark" color={Colors.black} size={22} />
        )}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 8,
  },
});
