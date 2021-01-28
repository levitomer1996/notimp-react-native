import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AssetCard from "./AssetCard";
import { AntDesign } from "@expo/vector-icons";
const MyAssets = ({ list, navigation }) => {
  return (
    <View>
      <View style={styles.myAssestsHeader}>
        <Text style={styles.text}>My Assests:</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddAsset");
          }}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          return (
            <AssetCard
              title={item.title}
              owner={item.owner}
              img_uri={item.img_uri}
            />
          );
        }}
        keyExtractor={(item) => item._id}
        horizontal={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  myAssestsHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
export default MyAssets;
