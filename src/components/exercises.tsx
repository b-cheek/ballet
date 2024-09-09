import globalStyles from "@/src/constants/globalStyles";
import { router } from "expo-router";
import React from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";

const Exercises: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <SectionList
        sections={[
          { title: "3/4", data: ["item1", "item2"] },
          { title: "4/4", data: ["item3", "item4"] },
          { title: "Custom Playlist", data: ["item5", "item6"] },
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/exercise/${item}`)}>
            <View style={styles.exerciseItem}>
              <Text>{item}</Text>
            </View>
          </Pressable>
        )}
        renderSectionHeader={({ section }) => (
          <View>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
  },

  exerciseItem: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default Exercises;
