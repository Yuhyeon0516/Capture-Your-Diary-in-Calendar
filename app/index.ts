import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function IndexPage() {
  const router = useRouter();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(Platform.OS, session);
      if (session) {
        router.replace("/(tabs)");
      }
    });

    supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)/login");
      }
    });
  }, []);
}
