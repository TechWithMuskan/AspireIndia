import React from "react";
import { View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "../theme";

const Icon = (props) => {
  const { type, name, size, color, extraStyles, onPress } = props;

  return (
    <View style={extraStyles}>
      {type === "MaterialIcons" ? (
        <MaterialIcons
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "Feather" ? (
        <Feather
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : (
        <FontAwesome
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      )}
    </View>
  );
};

export default Icon;
