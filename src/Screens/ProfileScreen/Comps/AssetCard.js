import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const AssetCard = ({ title, img_uri, price, owner }) => {
  return (
    <Card>
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
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: "orange",
        }}
        title="See more"
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  details_Container: {
    display: "flex",
    flexDirection: "row",
  },
});
export default AssetCard;
