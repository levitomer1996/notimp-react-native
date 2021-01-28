import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import ElementInput from "../../Components/ElementInput";
import { CheckBox } from "react-native-elements";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import isPasswordMatches from "./Comps/isPasswordMatches";
import notimp from "../../api/notimp";
import firebase from "firebase";
import useCreateMongoUser from "../../Hooks/useCreateMongoUser";
const SignupScreen = ({}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [landLord, setLandLord] = useState(false);
  const [renter, setRenter] = useState(false);
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [passwordMatches, setPasswordMatches] = useState(null);
  const [createNewMongoUser] = useCreateMongoUser();
  useEffect(() => {
    setPasswordMatches(isPasswordMatches(password, confirmPassword));
  }, [password, confirmPassword]);

  const handleSubmit = () => {
    if (passwordMatches) {
      setSpinner(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (newUser) => {
          console.log("Created new user");
          var user = firebase.auth().currentUser;
          user
            .updateProfile({
              displayName: first_name + " " + last_name,
            })
            .then(async function (u) {
              console.log("Update Name successfully");
              console.log("Registering in to NestJS Servcer");
            })
            .catch(function (error) {
              console.log(error);
              setSpinner(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setSpinner(false);
        });
    }
  };

  return (
    <View style={styles.root}>
      <ElementInput
        textType="emailAddress"
        label="Email"
        placeholder="user@email.com"
        onChangeText={setEmail}
      />
      <ElementInput
        textType="password"
        label="Password"
        onChangeText={setPassword}
        error={passwordMatches ? null : "Password doesn't  match"}
      />
      <ElementInput
        textType="password"
        label="Confirm password"
        onChangeText={setConfirmPassword}
        error={passwordMatches ? null : "Password doesn't  match"}
      />

      <ElementInput
        label="First name"
        textType="givenName"
        onChangeText={set_first_name}
      />
      <ElementInput
        label="Last name"
        textType="familyName"
        onChangeText={set_last_name}
      />

      <Button
        disabled={spinner}
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
        iconContainerStyle={{ background: "#000" }}
        loadingProps={{ animating: true }}
        title="Sign-up"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
        onPress={() => handleSubmit()}
      />
      {spinner ? <ActivityIndicator size="large" color="#00ff00" /> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  checkBoxescontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignupScreen;
