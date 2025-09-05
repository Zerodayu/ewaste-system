import { COLORS } from "@/themes";
import { Stack } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.background
      }}>
    <Stack screenOptions={{
      headerShown: false,
      animation: 'none',
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
    </Stack>
    </SafeAreaView>
  );
}
