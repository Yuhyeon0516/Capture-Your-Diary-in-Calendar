import { Image, StyleSheet, View } from "react-native";
import React from "react";

type LogoHeader = {
  rightComponent: () => React.JSX.Element;
};

export default function LogoHeader({ rightComponent }: LogoHeader) {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        width={250}
        height={50}
        style={{
          objectFit: "cover",
          top: -5,
        }}
      />
      {rightComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
