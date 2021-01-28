import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SigninButton = ({ type }) => {
  switch (type) {
    case "google":
      return (
        <TouchableOpacity>
          <Button
            buttonStyle={{
              width: 150,
              paddingLeft: 5,
              backgroundColor: "#ff0000ad",
              width: 300,
            }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F",
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            icon={<AntDesign name="google" size={24} color="black" />}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => alert("click")}
            title="Sign in by Google"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          />
        </TouchableOpacity>
      );
    case "facebook":
      return (
        <TouchableOpacity>
          <Button
            buttonStyle={{
              width: 150,
              paddingLeft: 5,
              width: 300,
            }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F",
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            icon={<Feather name="facebook" size={24} color="black" />}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => alert("click")}
            title="Sign in by Facebook"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          />
        </TouchableOpacity>
      );
    default:
      break;
  }
};

export default SigninButton;
