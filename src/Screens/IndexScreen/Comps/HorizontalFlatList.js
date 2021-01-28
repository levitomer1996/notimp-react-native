import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import HorizontalCard from "./HorizontalCard";
const HorizontalFlatList = ({ list, title, navigation }) => (
  <View>
    <Text style={styles.header_text}>{title}</Text>
    <FlatList
      data={list}
      renderItem={({ item }) => {
        return (
          <HorizontalCard
            id={item._id}
            navigation={navigation}
            title={item.title}
            owner={item.owner}
            price={item.price}
            img_uri="https://luxury-houses.net/wp-content/uploads/2020/05/Design-concept-of-House-in-the-Hill-by-Alexander-Zhidkov-Architect-1.jpg"
          />
        );
      }}
      keyExtractor={(item) => item._id}
      horizontal={true}
    />
  </View>
);
const styles = StyleSheet.create({
  header_text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default HorizontalFlatList;
