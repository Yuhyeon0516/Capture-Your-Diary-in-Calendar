import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import * as ImagePicker from "expo-image-picker";
import { Alert, Platform } from "react-native";
import dayjs from "dayjs";
import * as ImageManipulator from "expo-image-manipulator";
import { Diary } from "@/types/diary";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export async function uploadImage(
  result: ImagePicker.ImagePickerResult,
  resizeWidth: number,
  userCode: string
) {
  if (!result.canceled) {
    const todayString = dayjs().format("YYYY.MM.DD");
    const manipulatorResult = await ImageManipulator.manipulateAsync(
      result.assets[0].uri,
      [{ resize: { width: resizeWidth } }]
    );
    const res = await fetch(manipulatorResult.uri);
    const blob = await res.blob();
    const arrayBuffer = await new Response(blob).arrayBuffer();
    const { data, error } = await supabase.storage
      .from("image")
      .upload(`${userCode}/${todayString}_${resizeWidth}.jpeg`, arrayBuffer, {
        contentType: "image/jpeg",
        upsert: true,
      });
    if (error) {
      Alert.alert(
        "이미지 업로드 에러",
        `이미지 업로드 중 에러가 발생하였습니다.\n불편을 드려 죄송합니다.${
          Platform.OS === "ios" ? "\n" : " "
        }다시 시도 부탁드립니다.`
      );

      throw Error();
    }

    return supabase.storage.from("image").getPublicUrl(data.path).data
      .publicUrl;
  }
}

export async function uploadDiaryAndImage(
  userCode: string,
  title: string,
  description: string,
  imagePath: string
) {
  const todayString = dayjs().format("/YYYY.MM.DD");
  const { error, data } = await supabase
    .from("diary")
    .upsert({
      id: userCode + todayString,
      title,
      description,
      user_code: userCode,
      image_path: imagePath,
    })
    .select();

  if (error) {
    Alert.alert(
      "다이어리 업로드 에러",
      `다이어리 업로드 중 에러가 발생하였습니다.\n불편을 드려 죄송합니다.${
        Platform.OS === "ios" ? "\n" : " "
      }다시 시도 부탁드립니다.`
    );
    throw Error();
  }

  return data[0] as Diary;
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getScreenType(): Promise<"auth" | "main"> {
  const user = await getUser();

  if (!user) {
    return "auth";
  }

  return "main";
}

export async function getMyDiary() {
  const diary = await supabase
    .from("diary")
    .select()
    .filter("user_code", "eq", "1234");

  return diary.data as Diary[];
}
