import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import firebase from "firebase";
import AuthContext from "../../Context/AuthContext";
import useGetCurrentUser from "../../Hooks/useGetCurrentUser";
import ProfileAvatar from "./Comps/ProfileAvatar";
import ProfileRating from "./Comps/ProfileRating";
import MyAssets from "./Comps/MyAssets";
import { v4 as uuidv4 } from "uuid";
import { ScrollView } from "react-native-gesture-handler";
import useGetUserAssets from "../../Hooks/useGetUserAssets";
const ProfileScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser, spinner, error] = useGetCurrentUser();
  const [assets, setAssets, assetsSpinner] = useGetUserAssets();
  const { Signout, authState } = useContext(AuthContext);
  useEffect(() => {
    setCurrentUser();
    setAssets(authState.user.uid);
  }, []);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        Signout();
      })
      .catch((err) => {});
    Signout();
  };

  return (
    <ScrollView>
      {authState.isLogged ? null : navigation.navigate("index")}
      <ProfileAvatar img_uri={currentUser.photoURL} />
      <Text>{currentUser.displayName}</Text>
      <ProfileRating />
      {assetsSpinner ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <MyAssets list={assets} navigation={navigation} />
      )}
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
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => alert("click")}
        title="Logout"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
        onPress={() => {
          handleLogout();
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
