import UploadForm from "@/src/components/uploadForm";
import globalStyles from "@/src/constants/globalStyles";
import { Text, View } from "react-native";

export default function UploadScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Upload</Text>
      <UploadForm />
    </View>
  );
}
