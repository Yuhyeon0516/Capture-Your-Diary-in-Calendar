import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type CustomMultiTextInputProp = {
  text: string;
  value: string;
  onChangeText: (value: string) => void;
};

export default function CustomMultiTextInput({
  text,
  value,
  onChangeText,
}: CustomMultiTextInputProp) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.textInput}
        multiline
        autoCapitalize="none"
        textAlignVertical="top"
        cursorColor={Colors.black}
        blurOnSubmit={false}
        scrollEnabled={false}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    gap: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4,
    color: Colors.primary,
  },
  textInput: {
    width: "100%",
    height: 200,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "flex-start",
  },
});
