import React, { useContext, useEffect, useState } from "react";
import firebase, { auth } from "firebase";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Button } from "react-native-elements";
import ElementInput from "../../Components/ElementInput";
import * as GoogleSignIn from "expo-google-sign-in";
import * as AppAuth from "expo-app-auth";

import AuthContext from "../../Context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import SigninButton from "./Comps/SigninButton";
const SigninScreen = ({ navigation }) => {
  const { authState } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const handleSumbit = (email, password) => {
    setError(null);
    setSpinner(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setError(false);
      })
      .catch((err) => {
        setError("Invalid email or password");
        console.log(error);
        setError(false);
      });
  };
  if (authState.isLogged) {
    return navigation.navigate("index");
  } else {
    return (
      <View style={styles.root}>
        <Text h4>Sign in with your google account</Text>
        <ElementInput
          label="E-mail"
          placeholder="user@email.com"
          onChangeText={setEmail}
          textType="emailAddress"
        />
        <ElementInput
          label="Password"
          placeholder="******"
          textType="password"
          onChangeText={setPassword}
        />

        <Button
          buttonStyle={{
            width: 300,
            backgroundColor: "orange",
          }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F",
          }}
          loadingProps={{ animating: true }}
          onPress={() => handleSumbit(email, password)}
          title="Login"
          titleStyle={{ marginHorizontal: 5 }}
        />

        <Text style={{ color: "red" }}>{error}</Text>
        <SigninButton type="google" />
        <SigninButton type="facebook" />
        <TouchableOpacity>
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("Signup")}
          >
            {" "}
            Still don't have an account? Register now!
          </Text>
        </TouchableOpacity>
        {spinner ? <ActivityIndicator size="large" color="orange" /> : null}
      </View>
    );
  }
};
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SigninScreen;
