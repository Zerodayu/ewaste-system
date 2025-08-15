import { COLORS } from "@/styles/themes";
import { Tabs } from "expo-router";
import { Bolt, CircleUser, Focus } from "lucide-react-native";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.muted,
      tabBarStyle: {
        backgroundColor: COLORS.background,
        borderTopWidth: 1,
        borderColor: COLORS.secondary,
        borderStyle: "solid",
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Focus size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <Bolt size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <CircleUser size={size} color={color} />,
        }}
      />
      {/* <Tabs.Screen name="settings" /> */}
    </Tabs>
  );
}
