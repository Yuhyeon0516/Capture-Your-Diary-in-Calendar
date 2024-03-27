import { Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import BackTitleHeader from "@/components/common/BackTitleHeader";
import CustomTextInput from "@/components/common/CustomTextInput";
import PrimaryButton from "@/components/common/PrimaryButton";
import { signup } from "@/utils/supabase";

export default function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function onChangeEmail(value: string) {
    setEmail(value);
  }

  function onChangePassword(value: string) {
    setPassword(value);
  }

  function onChangePasswordConfirm(value: string) {
    setPasswordConfirm(value);
  }

  async function onPressSignup() {
    if (!email) {
      Alert.alert("이메일을 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("비밀번호를 6글자 이상 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert("비밀번호가 일치하지 않습니다.");
    }

    await signup(email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackTitleHeader text="회원가입" />

      <CustomTextInput
        keyboardType="email-address"
        text="이메일"
        onChangeText={onChangeEmail}
        value={email}
      />

      <CustomTextInput
        text="비밀번호"
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry
        marginTop={10}
      />

      <CustomTextInput
        text="비밀번호 확인"
        onChangeText={onChangePasswordConfirm}
        value={passwordConfirm}
        secureTextEntry
        marginTop={10}
      />

      <PrimaryButton text="회원가입" onPress={onPressSignup} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
});
