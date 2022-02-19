import { TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./styles";

const PrimaryButton = (props) => {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
