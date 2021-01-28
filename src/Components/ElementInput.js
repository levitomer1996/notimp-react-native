import * as React from "react";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default (props) => {
  const {
    label,
    error,
    onChangeText,
    placeholder,
    textType,
    maxWidth,
    icon,
    rightIcon,
    lines,
  } = props;
  return (
    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{
        maxWidth: maxWidth ? maxWidth : null,
      }}
      errorMessage={error}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label={label}
      labelStyle={{}}
      rightIcon={rightIcon ? rightIcon : null}
      labelProps={{}}
      textContentType={textType}
      secureTextEntry={textType === "password" ? true : false}
      leftIcon={icon ? <Icon name="account-outline" size={20} /> : null}
      leftIconContainerStyle={{}}
      numberOfLines={lines ? lines : null}
      rightIconContainerStyle={{}}
      placeholder={placeholder}
      onChangeText={(value) => {
        onChangeText(value);
      }}
    />
  );
};
