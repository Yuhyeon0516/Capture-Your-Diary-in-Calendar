import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider, createClient } from "@supabase/supabase-js";
import * as ImagePicker from "expo-image-picker";
import { Alert, Platform } from "react-native";
import dayjs from "dayjs";
import * as ImageManipulator from "expo-image-manipulator";
import { Diary } from "@/types/diary";
import { createUUID } from "./util";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import * as QueryParams from "expo-auth-session/build/QueryParams";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey, {
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

export async function getMyDiary(userCode: string) {
  const diary = await supabase
    .from("diary")
    .select()
    .filter("user_code", "eq", userCode);

  return diary.data as Diary[];
}

export async function signup(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userCode: createUUID(),
      },
    },
  });

  if (error) {
    if (error.message.includes("User already registered")) {
      Alert.alert("이미 가입된 회원입니다.");
      return;
    }

    Alert.alert("알 수 없는 에러가 발생하였습니다.");
  }
}

export async function signout() {
  await supabase.auth.signOut();
}

export async function signin(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error);
    if (error.message.includes("Invalid login credentials")) {
      Alert.alert("이메일 또는 비밀번호가 잘못되었습니다.");
      return;
    }
    Alert.alert("알 수 없는 에러가 발생하였습니다.");
  }
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function setUserCode(userCode: string) {
  const { error } = await supabase.auth.updateUser({
    data: {
      userCode,
    },
  });

  if (error) {
    Alert.alert("알 수 없는 에러가 발생하였습니다.");
  }
}

export async function setSession(accessToken: string, refreshToken: string) {
  const { error } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (error) {
    Alert.alert("알 수 없는 에러가 발생하였습니다.");
  }
}

export async function signInWithOAuth(provider: Provider, redirectTo: string) {
  const {
    data: { url: authUrl },
    error,
  } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });

  if (error) {
    Alert.alert("알 수 없는 에러가 발생하였습니다.");
    return;
  }

  if (Platform.OS === "ios") {
    const result = await WebBrowser.openAuthSessionAsync(authUrl!);

    if (result.type === "cancel") {
      return;
    }

    if (result.type !== "success") {
      Alert.alert("로그인에 실패하였습니다.");
      return;
    }

    const { url } = result as WebBrowser.WebBrowserRedirectResult;
    const { params, errorCode } = QueryParams.getQueryParams(url);

    if (errorCode) {
      Alert.alert("로그인 중 에러가 발생하였습니다.");
    }

    const { access_token, refresh_token } = params;

    await setSession(access_token as string, refresh_token as string);
  } else {
    Linking.addEventListener("url", async (event) => {
      const { url } = event;

      const { params, errorCode } = QueryParams.getQueryParams(url);

      if (errorCode) {
        Alert.alert("로그인 중 에러가 발생하였습니다.");
      }

      const { access_token, refresh_token } = params;
      await setSession(access_token, refresh_token);
    });

    await WebBrowser.openAuthSessionAsync(authUrl!);
  }
}
