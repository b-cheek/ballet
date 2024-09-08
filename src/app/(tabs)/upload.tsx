import { View, Text, StyleSheet } from 'react-native';
import UploadForm from '@/src/components/uploadForm';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Upload</Text>
      <UploadForm />
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
