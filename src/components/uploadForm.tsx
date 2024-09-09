import * as DocumentPicker from "expo-document-picker";
import globalStyles from "../constants/globalStyles";

import React from "react";
import { Button, View } from "react-native";

const UploadForm: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Button
        title="Upload sheet music"
        onPress={async () => {
          const result = await DocumentPicker.getDocumentAsync();
          if (result.canceled) {
            console.log("Document picker failed");
          } else {
            console.log(result.assets);
          }
        }}
      />
      <Button
        title="Upload audio"
        onPress={async () => {
          const result = await DocumentPicker.getDocumentAsync();
          if (result.canceled) {
            console.log("Document picker failed");
          } else {
            console.log(result.assets);
          }
        }}
      />
    </View>
  );
};

export default UploadForm;
