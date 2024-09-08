import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const MyComponent: React.FC = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: 'Title1', data: ['item1', 'item2'] },
                    { title: 'Title2', data: ['item3', 'item4'] },
                    { title: 'Title3', data: ['item5', 'item6'] },
                ]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <View><Text>{item}</Text></View>}
                renderSectionHeader={({ section }) => <View><Text>{section.title}</Text></View>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyComponent;