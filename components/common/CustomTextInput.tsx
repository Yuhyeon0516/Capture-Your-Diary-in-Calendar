import {
  Keyboard,
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type CustomTextInputProp = {
  text: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  marginTop?: number;
};

export default function CustomTextInput({
  text,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  marginTop = 20,
}: CustomTextInputProp) {
  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        cursorColor={Colors.black}
        blurOnSubmit={false}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={Keyboard.dismiss}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
