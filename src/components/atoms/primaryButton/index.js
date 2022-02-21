import { TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./styles";

const PrimaryButton = (props) => {
  const { title, disabled, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        disabled ? styles.disableButton : styles.enableButton,
      ]}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
