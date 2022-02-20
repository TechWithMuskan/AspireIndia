import React from "react";
import ToggleSwitch from "toggle-switch-react-native";
import { colors } from "../../../theme";

const Toggle = (props) => {
  const { value, onPress } = props;

  return (
    <ToggleSwitch
      isOn={value}
      onColor={colors.appPrimary}
      offColor={colors.lightGrey}
      size="small"
      onToggle={onPress}
    />
  );
};

export default Toggle;
