import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import CustomTextInput from "../common/CustomTextInput";

export default function AddDiary() {
  const [imageResult, setImageResult] =
    useState<ImagePicker.ImagePickerResult | null>(null);
  const { width } = Dimensions.get("window");

  async function getImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled) {
      setImageResult(result);
    }
  }

  return (
    <>
      <View>
        <TouchableOpacity
          style={[
            {
              width: width - 40,
              height: width - 40,
            },
            styles.imageBox,
          ]}
          onPress={getImage}
        >
          {!imageResult ? (
            <View style={styles.noImage}>
              <FontAwesome name="plus" color={Colors.white} size={36} />
            </View>
          ) : (
            <View style={styles.image}>
              <Image
                source={{ uri: imageResult.assets![0].uri }}
                width={width - 40}
                height={width - 40}
                style={{ objectFit: "cover" }}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <CustomTextInput text="제목" />

      <View style={{ marginTop: 15, gap: 8 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 4,
            color: Colors.primary,
          }}
        >
          내용
        </Text>
        <TextInput
          style={{
            width: "100%",
            height: 200,
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingTop: 15,
            paddingBottom: 15,
            justifyContent: "flex-start",
          }}
          multiline
          autoCapitalize="none"
          textAlignVertical="top"
          cursorColor={Colors.black}
          blurOnSubmit={false}
        />
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 60,
          backgroundColor: Colors.primary,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.white }}>
          추가
        </Text>
      </TouchableOpacity>

      <View style={{ height: 70 }} />
    </>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    borderRadius: 20,
    overflow: "hidden",
  },
  noImage: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});
