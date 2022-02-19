import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import { colors } from "../../../theme";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <ToggleSwitch
      isOn={toggle}
      onColor={colors.appPrimary}
      offColor={colors.lightGrey}
      size="small"
      onToggle={() => setToggle(!toggle)}
    />
  );
};

export default Toggle;
