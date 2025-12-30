import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Kezdőlap" }} />
      <Tabs.Screen name="teams" options={{ title: "Csapatok" }} />
    </Tabs>
  );
}
