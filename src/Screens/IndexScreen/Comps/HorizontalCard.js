import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
const HorizontalCard = ({ img_uri, title, owner, price, navigation, id }) => {
  return (
    <Card style={styles.root}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: img_uri }}></Card.Image>
      <Card.Divider />
      <View style={styles.details_Container}>
        <Text style={{ marginRight: 20 }}>By: {owner}</Text>
        <Text>Price: {price}$</Text>
      </View>
      <Card.Divider />
      <Button
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: "orange",
        }}
        title="See more"
        onPress={() => {
          navigation.navigate("Asset", { id });
        }}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  root: { width: 500 },
  details_Container: {
    display: "flex",
    flexDirection: "row",
  },
});
export default HorizontalCard;
