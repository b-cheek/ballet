import Exercises from "@/src/components/exercises";
import globalStyles from "@/src/constants/globalStyles";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
      <Exercises />
      {/* TODO: maybe refactor this without using groups similar to the upload and settings pages */}
    </View>
  );
}
