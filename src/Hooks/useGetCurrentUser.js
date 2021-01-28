import React, { useState } from "react";
import firebase from "firebase";
export default () => {
  const [currentUser, setUser] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(null);
  var user = firebase.auth().currentUser;
  const setCurrentUser = () => {
    setSpinner(true);
    if (user) {
      setUser(user);

      setSpinner(false);
    } else {
      setSpinner(false);
      setError("Something wen't wrong with authentication");
    }
  };
  return [currentUser, setCurrentUser, spinner, error];
};
