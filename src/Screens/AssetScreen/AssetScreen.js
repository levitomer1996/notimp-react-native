import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useGetAssetDetails from "../../Hooks/useGetAssetDetails";
import AssetOnMap from "./Comps/AssetOnMap";
import { Rating } from "react-native-elements";
const AssetScreen = ({ navigation }) => {
  const [getAssetDetails, asset, spinner] = useGetAssetDetails();
  useEffect(() => {
    getAssetDetails(navigation.state.params.id);
  }, []);

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
    owner,
  } = asset;

  const [descriptions, sd] = useState("");
  return (
    <ScrollView>
      {spinner ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View style={styles.root}>
          <Image
            source={{
              uri:
                "https://luxury-houses.net/wp-content/uploads/2020/05/Design-concept-of-House-in-the-Hill-by-Alexander-Zhidkov-Architect-1.jpg",
            }}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Rating
            imageSize={70}
            minValue={0}
            onFinishRating={() => console.log("onFinishRating()")}
            onStartRating={() => console.log("onStartRating()")}
            ratingBackgroundColor="#FFF"
            ratingColor="#FF0"
            ratingCount={5}
            ratingImage="star"
            ratingTextColor="#222"
            reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
            showRating
            startingValue={0}
            style={{}}
            type="star"
          />
          <View style={styles.pirce_owner_container}>
            <Text style={{ marginRight: 30, fontWeight: "bold" }}>
              Price :{price}$
            </Text>
            <Text style={{ fontWeight: "bold" }}> Owner: {owner}</Text>
          </View>
          {/* {location ? (
            <AssetOnMap location={location} title={title} />
          ) : (
            <ActivityIndicator size="large" color="orange" />
          )} */}
          <Button
            buttonStyle={{
              width: 150,
              backgroundColor: "orange",
              marginTop: 30,
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
            onPress={() => navigation.navigate("Chat")}
            title={`Contact ${owner}`}
            titleStyle={{ marginHorizontal: 5 }}
          />
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 30,
  },
  description: {
    padding: 50,
    fontSize: 15,
  },
  pirce_owner_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default AssetScreen;
