import globalStyles from "@/src/constants/globalStyles";
import { useLocalSearchParams } from "expo-router";
import { Button, Image, Text, View } from "react-native";

export default function DetailsScreen() {
  const local = useLocalSearchParams();

  return (
    <View style={globalStyles.container}>
      <Text>Exercise</Text>
      <Text>{local.exercise}</Text>
      <Button title="View sheet music" onPress={() => void 0} />
      <Image
        source={{
          uri: "https://www.shutterstock.com/image-illustration/minimized-video-player-bar-audio-260nw-1843899562.jpg",
        }}
        style={{ width: 600, height: 200 }}
      />
    </View>
  );
}
