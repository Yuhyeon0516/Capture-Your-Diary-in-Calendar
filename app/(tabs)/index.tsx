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
import { getMyDiary } from "@/utils/supabase";
import { useRecoilState, useSetRecoilState } from "recoil";
import { DIARY } from "@/utils/recoil";

export default function index() {
  const [loading, setLoading] = useState(false);
  const setDiary = useSetRecoilState(DIARY);
  const tabBarHeight = useBottomTabBarHeight();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const diary = await getMyDiary();
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
