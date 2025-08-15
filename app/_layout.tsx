import SafeScreen from "@/components/SafeArea";
import { COLORS, THEMES } from "@/styles/themes";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  
  return (
    <SafeScreen>
      <StatusBar style={COLORS === THEMES.dark ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="(landing)" />
      </Stack>
    </SafeScreen>
  );
}
