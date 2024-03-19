import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function CustomTextInput({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        cursorColor={Colors.black}
        blurOnSubmit={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4,
    color: Colors.primary,
  },
  textInput: {
    width: "100%",
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 8,
  },
});
