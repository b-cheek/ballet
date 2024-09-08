import * as DocumentPicker from 'expo-document-picker';

import React from 'react';
import { View, Button, Text } from 'react-native';

const UploadForm: React.FC = () => {

    return (
        <View>
            <Button 
                title="Upload"
                onPress={async () => {
                    const result = await DocumentPicker.getDocumentAsync();
                    if (result.canceled) {
                        console.log('Document picker failed');
                    }
                    else {
                        console.log(result.assets);
                    }
                }
            }/>
        </View>
    );
};

export default UploadForm;