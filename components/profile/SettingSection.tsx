import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

type SettingSectionProps = {
  title: string;
  rightIcon?: () => React.JSX.Element;
  leftIcon?: () => React.JSX.Element;
  onPress: () => void;
};

export default function SettingSection({
  title,
  rightIcon = () => <></>,
  leftIcon = () => <></>,
  onPress,
}: SettingSectionProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={{ width: 30 }}>{leftIcon()}</View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: Colors.black,
            flex: 1,
          }}
        >
          {title}
        </Text>
        {rightIcon()}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black,
  },
});
