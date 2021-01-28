import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text } from "react-native";
import { Tile } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";

c;

const AssetOnMap = ({ location, title }) => {
  if (location) {
    console.log(location.longitude);
    return (
      <MapView
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: location.latitude,
          longitudeDelta: location.longitude,
        }}
        style={{ height: 300, width: 500 }}
      >
        <Marker key="fdsafasd" title={title} coordinate={location} />
      </MapView>
    );
  } else {
    return (
      <View>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }
};
export default AssetOnMap;
