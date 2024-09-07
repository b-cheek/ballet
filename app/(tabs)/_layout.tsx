import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="upload" options={{ title: "Upload", tabBarIcon: ({ color }) => <FontAwesome size={28} name="upload" color={color} /> }} />
      <Tabs.Screen name="(home)" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} /> }} />
    </Tabs>
  );
}
