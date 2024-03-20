import { SCREENTYPE } from "@/utils/recoil";
import { getScreenType } from "@/utils/supabase";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <RootLayoutNav />
    </RecoilRoot>
  );
}

function RootLayoutNav() {
  const [screen, setScreen] = useRecoilState(SCREENTYPE);

  useEffect(() => {
    (async () => {
      const screenType = await getScreenType();
      setScreen(screenType);
    })();
  }, [setScreen]);

  return screen !== "auth" ? (
    <Stack>
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
    </Stack>
  ) : (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/addDiary"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
