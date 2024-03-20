import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import CustomMultiTextInput from "../common/CustomMultiTextInput";
import { uploadDiaryAndImage, uploadImage } from "@/utils/supabase";
import { useRouter } from "expo-router";
import CustomTextInput from "../common/CustomTextInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PrimaryButton from "../common/PrimaryButton";

type AddDiaryProp = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddDiary({ setIsLoading }: AddDiaryProp) {
  const [imageResult, setImageResult] =
    useState<ImagePicker.ImagePickerResult | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { width } = Dimensions.get("window");
  const router = useRouter();
  const safeAreaInsets = useSafeAreaInsets();

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

    if (!title) {
      Alert.alert(
        "제목을 작성해주세요.",
        "제목을 간단하게 1줄만 작성해주세요!"
      );
      return;
    }

    if (!description) {
      Alert.alert(
        "내용을 작성해주세요.",
        "남기고 싶은 오늘 하루를 작성해주세요!"
      );
      return;
    }

    setIsLoading(true);
    try {
      await uploadImage(imageResult, 300, "1234");
      await uploadImage(imageResult, 150, "1234");
      const result = await uploadImage(imageResult, 50, "1234");
      if (!result) {
        Alert.alert("이미지 경로 에러", "이미지의 경로를 찾을 수 없습니다.");
        throw Error();
      }
      await uploadDiaryAndImage("1234", title, description, result!);
      router.back();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  function onChangeTitle(value: string) {
    setTitle(value);
  }

  function onChangeDescription(value: string) {
    setDescription(value);
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

      <CustomTextInput text="제목" value={title} onChangeText={onChangeTitle} />

      <CustomMultiTextInput
        text="내용"
        value={description}
        onChangeText={onChangeDescription}
      />

      <PrimaryButton text="추가" onPress={uploadDiary} />

      <View style={{ height: safeAreaInsets.bottom + 20 }} />
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
