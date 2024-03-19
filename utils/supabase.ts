import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import * as ImagePicker from "expo-image-picker";
import { Alert, Platform } from "react-native";

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

export async function uploadImage(result: ImagePicker.ImagePickerResult) {
  if (!result.canceled) {
    const res = await fetch(result.assets[0].uri);
    const blob = await res.blob();
    const arrayBuffer = await new Response(blob).arrayBuffer();
    const { data, error } = await supabase.storage
      .from("image")
      .upload("1.jpeg", arrayBuffer, {
        contentType: "image/jpeg",
        upsert: true,
      });
    if (error) {
      Alert.alert(
        "이미지 업로드 중 에러가 발생하였습니다.",
        `불편을 드려 죄송합니다.${
          Platform.OS === "ios" ? "\n" : " "
        }다시 시도 부탁드립니다.`
      );
    }

    return supabase.storage.from("image").getPublicUrl("1.jpeg").data.publicUrl;
  }
}
