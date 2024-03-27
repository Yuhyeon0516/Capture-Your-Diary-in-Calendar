import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import CountTitleText from "./CountTitleText";
import SectionTitle from "./SectionTitle";
import { useRecoilValue } from "recoil";
import { DIARY, USER } from "@/utils/recoil";

export default function MyProfile() {
  const user = useRecoilValue(USER);
  const diary = useRecoilValue(DIARY);

  function onPressShare() {
    Alert.alert("아직 개발중인 기능입니다!", "조금만 기다려주세요~");
  }

  return (
    <View style={styles.container}>
      <SectionTitle text="프로필" />
      <View style={styles.image} />
      <View style={{ gap: 4, alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: Colors.black }}>
          {user.email}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "500", color: Colors.black }}>
          #{user.userCode}
        </Text>
      </View>
      <View style={styles.countContainer}>
        <CountTitleText
          title="내가 남긴 하루"
          count={diary.length}
          onPress={() => {}}
        />
        <CountTitleText
          title="공유 받은 하루"
          count={0}
          onPress={onPressShare}
        />
        <CountTitleText title="공유한 하루" count={0} onPress={onPressShare} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
  countContainer: {
    width: "100%",
    height: 80,
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
