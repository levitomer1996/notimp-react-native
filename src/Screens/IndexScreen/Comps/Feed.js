import React, { Component, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HorizontalCard from "./HorizontalCard";

import { notimp_feed_socket_endpoint } from "../../../api/notimp";

const Feed = () => {
  const [state, setState] = useState("Tomer");

  return (
    <View>
      <Text>{state}</Text>
    </View>
  );
};

export default Feed;
