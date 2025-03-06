// tabs/_layout.js
import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack
      screenOptions={{
        // or hide the header
        headerShown: false,
      }}
    />
  );
}
