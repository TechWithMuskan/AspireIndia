import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const TransparentButton = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;
