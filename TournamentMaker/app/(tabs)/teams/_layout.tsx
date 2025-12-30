import { Stack } from "expo-router";

export default function TeamsLayout() {
  return (
    <Stack>
      <Stack.Screen name="teams" options={{ title: "Csapatok" }} />
      <Stack.Screen name="create" options={{ title: "Új csapat" }} />
    </Stack>
  );
}
