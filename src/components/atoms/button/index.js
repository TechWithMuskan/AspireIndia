import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = (props) => {
  const { label, onPress, extraStyle } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, extraStyle]}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
