import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Header as H, Avatar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import AuthContext from "../Context/AuthContext";
import { auth } from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderAvatar = ({ nav }) => {
  const { authState } = useContext(AuthContext);
  const [img_uri, set_img_uri] = useState(null);
  useEffect(() => {
    set_img_uri(authState.user.photoURL);
  }, [authState]);
  return (
    <Avatar
      activeOpacity={0.2}
      rounded
      showAccessory
      size="medium"
      source={{
        uri: img_uri,
      }}
      titleStyle={{}}
      onPress={() => nav()}
    />
  );
};

const Header = ({ text, navigation }) => {
  const { authState } = useContext(AuthContext);
  return (
    <H
      backgroundColor="orange"
      barStyle="default"
      centerComponent={{
        text: text,
        style: {
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
        },
      }}
      containerStyle={{ maxWidth: 500 }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      placement="left"
      rightComponent={
        authState.isLogged ? (
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Text>{authState.user.displayName}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Ionicons
              name="person"
              size={24}
              color="#fff"
              onPress={() => navigation.navigate("Signin")}
            />
          </TouchableOpacity>
        )
      }
    />
  );
};

export default Header;
