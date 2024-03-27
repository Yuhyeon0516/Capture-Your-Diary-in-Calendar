import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import CustomTextInput from "@/components/common/CustomTextInput";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useRouter } from "expo-router";
import HorizontalDivider from "@/components/common/HorizontalDivider";
import GoogleSvg from "@/components/login/GoogleSvg";
import KakaoSvg from "@/components/login/KakaoSvg";
import { getUser } from "@/utils/supabase";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  function onChangeEmail(value: string) {
    setEmail(value);
  }

  function onChangePassword(value: string) {
    setPassword(value);
  }

  function onPressRegister() {
    router.push("/register");
  }

  useEffect(() => {
    (async () => {
      const user = await getUser();

      if (user) {
        router.replace("/(tabs)");
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color={Colors.primary} size={"large"} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/images/box_logo.png")}
        style={{ objectFit: "cover" }}
      />
      <KeyboardAvoidingView style={{ width: "100%" }} behavior="padding">
        <View style={{ width: "100%" }}>
          <CustomTextInput
            text="이메일"
            value={email}
            onChangeText={onChangeEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={{ width: "100%" }}>
          <CustomTextInput
            text="비밀번호"
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
            marginTop={10}
          />
        </View>
        <PrimaryButton text="로그인" onPress={() => {}} marginTop={15} />
      </KeyboardAvoidingView>

      <View style={styles.registerButtonContainer}>
        <Text style={{ color: "#718096", fontSize: 14 }}>
          아직 회원이 아니시라면?
        </Text>
        <TouchableOpacity style={{ padding: 5 }} onPress={onPressRegister}>
          <Text
            style={{ color: Colors.primary, fontSize: 16, fontWeight: "bold" }}
          >
            회원가입
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <HorizontalDivider />
        <Text style={{ color: Colors.black }}>또는</Text>
        <HorizontalDivider />
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: Colors.white }]}
        >
          <GoogleSvg />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: Colors.kakao }]}
        >
          <KakaoSvg />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
    paddingHorizontal: 20,
    gap: 10,
  },
  registerButtonContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 8,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 30,
  },
});
