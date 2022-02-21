import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { CloseEye, OpenEye } from "../../../theme/svgs";

const IconButton = (props) => {
  const { showDetail, onPress, extraStyle, label } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, extraStyle]}
    >
      {showDetail ? (
        <CloseEye height={18} width={18} />
      ) : (
        <OpenEye height={18} width={18} />
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
