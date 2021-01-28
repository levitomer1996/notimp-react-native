import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import ElementInput from "../../../Components/ElementInput";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddAssetContext from "../../../Context/AddAssetContext";
const GoogleMap = ({}) => {
  Geocoder.init("AIzaSyAcsln8Pmx_hNAdTiJyv3y5qcV3IxNZD9U");
  const { addAssetState, setLocation, setLocationName } = useContext(
    AddAssetContext
  );
  const handleSearchLocation = (l) => {
    Geocoder.from(l)
      .then((json) => {
        var res = json.results[0].geometry.location;
        console.log(res);
        setLocation({ latitude: res.lat, longitude: res.lng });
      })
      .catch((error) => console.warn(error));
  };

  return (
    <View>
      <ElementInput
        label="Location"
        right
        rightIcon={
          <TouchableOpacity
            onPress={() => handleSearchLocation(addAssetState.location_name)}
          >
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
        }
        onChangeText={setLocationName}
      />
      <MapView
        initialRegion={{
          latitude: addAssetState.location.latitude,
          longitude: addAssetState.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: 300 }}
      >
        <Marker
          key="fdsafasd"
          title="Tomer"
          coordinate={addAssetState.location}
        />
      </MapView>
    </View>
  );
};
export default GoogleMap;
