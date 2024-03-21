import { StyleSheet, View, Text } from "react-native";
import React from "react";
import SectionTitle from "./SectionTitle";
import SettingSection from "./SettingSection";
import Colors from "@/constants/Colors";
import {
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

export default function Settings() {
  function onPress() {
    console.log("press");
  }

  return (
    <View style={styles.container}>
      <SectionTitle text="환경설정" />

      <SettingSection
        title="자주 묻는 질문"
        rightIcon={() => (
          <MaterialIcons name="chevron-right" color={Colors.black} size={24} />
        )}
        leftIcon={() => (
          <MaterialIcons name="question-mark" color={Colors.black} size={24} />
        )}
        onPress={onPress}
      />
      <SettingSection
        title="문의하기"
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
        onPress={onPress}
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
        onPress={onPress}
      />
      <SettingSection
        title="앱 버전"
        leftIcon={() => (
          <Octicons name="versions" color={Colors.black} size={24} />
        )}
        rightIcon={() => (
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: Colors.black }}
          >
            v1.0.0
          </Text>
        )}
        onPress={onPress}
      />
      <SettingSection
        title="로그아웃"
        leftIcon={() => (
          <MaterialIcons name="logout" color={Colors.black} size={24} />
        )}
        onPress={onPress}
      />
      <SettingSection
        title="회원탈퇴"
        leftIcon={() => (
          <FontAwesome6 name="user-xmark" color={Colors.black} size={22} />
        )}
        onPress={onPress}
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
