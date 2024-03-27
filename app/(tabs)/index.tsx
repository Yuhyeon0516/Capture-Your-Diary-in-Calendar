import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Calendar from "@/components/home/Calendar";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import LogoHeader from "@/components/common/LogoHeader";
// import HomeHeaderRightComponent from "@/components/home/HomeHeaderRightComponent";
import { useRouter } from "expo-router";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { getMyDiary, getUser, setUserCode } from "@/utils/supabase";
import { useSetRecoilState } from "recoil";
import { DIARY, USER } from "@/utils/recoil";
import { createUUID } from "@/utils/util";

export default function index() {
  const [loading, setLoading] = useState(false);
  const setDiary = useSetRecoilState(DIARY);
  const tabBarHeight = useBottomTabBarHeight();
  const router = useRouter();
  const setUser = useSetRecoilState(USER);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const user = await getUser();

      if (!user!.user_metadata.userCode) {
        const userCode = createUUID();
        await setUserCode(userCode);

        setUser({
          email: user!.user_metadata.email,
          userCode,
        });
      } else {
        setUser({
          email: user!.user_metadata.email,
          userCode: user!.user_metadata.userCode,
        });
      }

      const diary = await getMyDiary(user!.user_metadata.userCode);
      setDiary(diary);
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
    <SafeAreaView style={{ flex: 1 }}>
      {/* <LogoHeader rightComponent={() => <HomeHeaderRightComponent />} /> */}
      <LogoHeader />
      <BannerAd
        unitId={TestIds.ADAPTIVE_BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
      <Calendar />

      <TouchableOpacity
        style={[styles.floatingButton, { bottom: tabBarHeight + 15 }]}
        onPress={() => router.navigate("/(modals)/addDiary")}
      >
        <FontAwesome name="plus" color={"white"} size={32} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    position: "absolute",
    right: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
