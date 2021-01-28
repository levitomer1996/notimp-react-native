import * as React from "react";
import { Avatar } from "react-native-elements";

export default ({ img_uri }) => {
  return (
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{}}
      iconStyle={{}}
      imageProps={{}}
      onAccessoryPress={() => alert("onAccessoryPress")}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      showAccessory
      size="xlarge"
      source={{
        uri: img_uri,
      }}
      title="P"
      titleStyle={{}}
    />
  );
};
