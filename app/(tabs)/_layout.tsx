import { COLORS } from "@/themes";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
          headerTintColor: COLORS.text,
      animation: 'simple_push',
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="profile" 
        options={{
          headerShown: true,
          title: 'Profile',
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTintColor: COLORS.text,
        }}
      />
    </Stack>
    </>
  );
}
