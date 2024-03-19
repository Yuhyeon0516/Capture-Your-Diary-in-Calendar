import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
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
import CustomMultiTextInput from "../common/CustomMultiTextInput";
import { uploadImage } from "@/utils/supabase";
import { useRouter } from "expo-router";

type AddDiaryProp = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddDiary({ setIsLoading }: AddDiaryProp) {
  const [imageResult, setImageResult] =
    useState<ImagePicker.ImagePickerResult | null>(null);
  const { width } = Dimensions.get("window");
  const router = useRouter();

  async function getImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.75,
    });

    if (!result.canceled) {
      setImageResult(result);
    }
  }

  async function uploadDiary() {
    if (!imageResult) {
      Alert.alert(
        "이미지를 업로드해주세요.",
        "이미지 1장을 선택하여 업로드해주세요!"
      );
      return;
    }
    setIsLoading(true);
    const result = await uploadImage(imageResult);
    setIsLoading(false);
    router.back();
  }

  return (
    <KeyboardAvoidingView>
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

      <CustomMultiTextInput text="내용" />

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
        onPress={uploadDiary}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.white }}>
          추가
        </Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </KeyboardAvoidingView>
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
