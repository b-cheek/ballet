
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import MyComponent from '@/src/components/exercises';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <MyComponent />
    {/* TODO: maybe refactor this without using groups similar to the upload and settings pages */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
