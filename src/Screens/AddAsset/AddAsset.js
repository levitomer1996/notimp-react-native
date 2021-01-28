import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ElementInput from "../../Components/ElementInput";
import AddAssetContext from "../../Context/AddAssetContext";
import GoogleMap from "./Components/GoogleMap";
import { CheckBox, Button } from "react-native-elements";
import notimp from "../../api/notimp";
import AuthContext from "../../Context/AuthContext";
import { auth } from "firebase";

const AddAsset = () => {
  const {
    addAssetState,
    setTitle,
    setDescription,
    setPrice,
    setFloor,
    setIsBalcony,
    setIsFurnished,
    setIsPets,
    setIsAirCondtioned,
  } = useContext(AddAssetContext);
  const {
    isBalcony,
    isFurnished,
    isPets,
    isAirConditioned,
    title,
    description,
    location,
    location_name,
    price,
    floor,
  } = addAssetState;
  const { authState } = useContext(AuthContext);
  const handleSubmit = async () => {
    try {
      const res = await notimp.post("asset/new", {
        uid: authState.user.uid,
        rate: 0,
        title,
        description,
        owner: authState.user.displayName,
        location,
        location_name,
        price,
        floor,
        isBalcony,
        isFurnished,
        isAirConditioned,
        isPets,
      });
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.root}>
      <ElementInput label={"Title"} onChangeText={setTitle} />
      <ElementInput
        label={"Description"}
        onChangeText={setDescription}
        line={4}
      />
      {/* <GoogleMap /> */}
      <View style={styles.price_floor_container}>
        <ElementInput label={"Price"} onChangeText={setPrice} maxWidth={100} />
        <ElementInput label={"Floor"} onChangeText={setFloor} maxWidth={100} />
      </View>
      <CheckBox
        checkedColor="orange"
        checkedTitle="The asset has balcony"
        onPress={() => (isBalcony ? setIsBalcony(false) : setIsBalcony(true))}
        size={30}
        title="The asset has balcony"
        uncheckedColor="#F00"
        checked={isBalcony}
      />
      <CheckBox
        checkedColor="orange"
        checkedTitle="The asset is furnished"
        onPress={() =>
          isFurnished ? setIsFurnished(false) : setIsFurnished(true)
        }
        size={30}
        title="The asset is furnished"
        uncheckedColor="#F00"
        checked={isFurnished}
      />
      <CheckBox
        checkedColor="orange"
        checkedTitle="Pets are allowed"
        onPress={() => (isPets ? setIsPets(false) : setIsPets(true))}
        size={30}
        title="Pets are allowed"
        uncheckedColor="#F00"
        checked={isPets}
      />
      <CheckBox
        checkedColor="orange"
        checkedTitle="Asset is air condioned"
        onPress={() =>
          isAirConditioned
            ? setIsAirCondtioned(false)
            : setIsAirCondtioned(true)
        }
        size={30}
        title="Asset is air condioned"
        uncheckedColor="#F00"
        checked={isAirConditioned}
      />

      <Button
        buttonStyle={{
          width: 150,
          backgroundColor: "orange",
        }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#000" }}
        loadingProps={{ animating: true }}
        onPress={() => handleSubmit()}
        title="Submit new property"
        titleStyle={{ marginHorizontal: 5 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { marginTop: 100, display: "flex", flexDirection: "column" },
  price_floor_container: {
    display: "flex",
    flex: 0.8,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default AddAsset;
