import { Stack } from 'expo-router';

export default function ExerciseLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitle:"Exercise"
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
