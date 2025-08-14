import SafeScreen from "@/components/SafeArea";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="(auth)" />
      </Stack>
    </SafeScreen>
  );
}
