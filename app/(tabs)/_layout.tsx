import { COLORS } from "@/themes";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: COLORS.background,
        borderColor: COLORS.primary + "50",
      },
      tabBarActiveTintColor: COLORS.primary, 
      tabBarInactiveTintColor: COLORS.accent + "80",
      animation: 'none',
    }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
