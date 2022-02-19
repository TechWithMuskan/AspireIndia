import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { colors } from "../theme";

const Icon = (props) => {
  const { type, name, size, color, extraStyles, onPress } = props;
  return (
    <View style={extraStyles}>
      {type === "MaterialCommunityIcons" ? (
        <MaterialCommunityIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "MaterialIcons" ? (
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
      ) : type === "FontAwesome5" ? (
        <FontAwesome5
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "FontAwesome" ? (
        <FontAwesome
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "Entypo" ? (
        <Entypo
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "AntDesign" ? (
        <AntDesign
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "Ionicons" ? (
        <Ionicons
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "EvilIcons" ? (
        <EvilIcons
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : type === "Fontisto" ? (
        <Fontisto
          name={name}
          onPress={onPress}
          size={size}
          color={color ? color : colors.white}
        />
      ) : (
        <Octicons
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
