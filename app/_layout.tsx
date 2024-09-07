
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:true, headerTitle:"Ballet App"}}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
