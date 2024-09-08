import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Exercises: React.FC = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: '3/4', data: ['item1', 'item2'] },
                    { title: '4/4', data: ['item3', 'item4'] },
                    { title: 'Custom Playlist', data: ['item5', 'item6'] },
                ]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <View style={styles.exerciseItem}><Text>{item}</Text><Link href={`/(home)/exercise/${item}`}>Link</Link></View>}
                renderSectionHeader={({ section }) => <View><Text style={styles.sectionTitle}>{section.title}</Text></View>}
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

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 4
    },

    exerciseItem: {
        fontSize: 16,
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 4,
        borderWidth: 1,
        borderRadius: 4,
    }
});

export default Exercises;