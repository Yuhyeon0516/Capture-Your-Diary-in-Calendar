import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoHeader from "@/components/common/LogoHeader";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import MyProfile from "@/components/profile/MyProfile";
import Settings from "@/components/profile/Settings";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function ProfilePage() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader />
      <BannerAd
        unitId={TestIds.ADAPTIVE_BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
      <ScrollView style={{ flex: 1 }}>
        <MyProfile />
        <Settings />
        <View style={{ height: tabBarHeight + 10 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
