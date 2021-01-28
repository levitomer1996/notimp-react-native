import React, { Component, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import io from "socket.io-client/dist/socket.io";
import { notimp_feed_socket_endpoint } from "../../api/notimp";
import ElementInput from "../../Components/ElementInput";
const ChatScreen = () => {
 
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default ChatScreen;
