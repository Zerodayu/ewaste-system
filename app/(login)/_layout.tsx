import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      animation: 'default',
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
