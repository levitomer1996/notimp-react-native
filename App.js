import React, { useEffect } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "@react-native-firebase/app";
import IndexScreen from "./src/Screens/IndexScreen/IndexScreen";
import { setNavigator } from "./src/navigationRef";
import SigninScreen from "./src/Screens/SigninScreen/SigninScreen";
import { AuthProvider } from "./src/Context/AuthContext";
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
import SignupScreen from "./src/Screens/SignupScrenn/SignupScreen";
import AddAsset from "./src/Screens/AddAsset/AddAsset";
import { AddAssetProvider } from "./src/Context/AddAssetContext";
import { IndexProvider } from "./src/Context/IndexContext";
import AssetScreen from "./src/Screens/AssetScreen/AssetScreen";
import ChatScreen from "./src/Screens/ChatScreen/ChatScreen";
const switchNavigator = createSwitchNavigator({
  indexFlow: createStackNavigator({
    index: {
      screen: IndexScreen,
      navigationOptions: { title: "index", headerShown: false },
    },
    profile: {
      screen: ProfileScreen,
      navigationOptions: { title: "profile", headerShown: true },
    },
    Signin: {
      screen: SigninScreen,
      navigationOptions: { title: "Signin", headerShown: true },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: { headerShown: false },
    },
    AddAsset: {
      screen: AddAsset,
      navigationOptions: { headerShown: false },
    },
    Asset: {
      screen: AssetScreen,
      navigationOptions: { headerShown: false },
    },
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <IndexProvider>
        <AddAssetProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AddAssetProvider>
      </IndexProvider>
    </AuthProvider>
  );
};
