import React, { useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import firebase from "firebase";
import { Image } from "react-native-elements";
import Header from "../../Components/Header";
import * as AppAuth from "expo-app-auth";
import AuthContext from "../../Context/AuthContext";
import HorizontalScroll from "./Comps/HorizontalFlatList";
import HorizontalCard from "./Comps/HorizontalCard";
import { ScrollView } from "react-native-gesture-handler";
import HorizontalFlatList from "./Comps/HorizontalFlatList";
import Feed from "./Comps/Feed";
import { v4 as uuidv4 } from "uuid";
import IndexContext from "../../Context/IndexContext";
import useGetAssets from "../../Hooks/useGetAssets";
import { ActivityIndicator } from "react-native";

const IndexScreen = ({ navigation }) => {
  const [getAssets, spinner] = useGetAssets();
  const { authState, Signin, Signout } = useContext(AuthContext);
  const { indexState } = useContext(IndexContext);
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAcsln8Pmx_hNAdTiJyv3y5qcV3IxNZD9U",
        authDomain: "auth-78ad7.firebaseapp.com",
        projectId: "auth-78ad7",
        storageBucket: "auth-78ad7.appspot.com",
        messagingSenderId: "106996799061",
        appId: "1:106996799061:web:695c8944553088516ba6dc",
        measurementId: "G-TCD9EXT43N",
      });
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Signin(user);
      } else {
      }
    });
    getAssets();
  }, []);

  return (
    <ScrollView>
      <Header text="Notimp" navigation={navigation} />
      <Image
        source={{ uri: "https://i.ibb.co/D4Ry7Gf/IMG-20201010-183120.jpg" }}
        style={{ maxWidth: 500, height: 200 }}
      />

      {spinner ? (
        <ActivityIndicator size="large" color="orange" />
      ) : (
        <HorizontalFlatList
          list={indexState.assets}
          title="Most relevant"
          navigation={navigation}
        />
      )}
      <Feed />
    </ScrollView>
  );
};

export default IndexScreen;
