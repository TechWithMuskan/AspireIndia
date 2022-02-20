import React, { useState, useEffect } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import { colors } from "../../../theme";

const Toggle = (props) => {
  const { selectedLimit, id } = props;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (selectedLimit && id === 2) setToggle(true);
  }, [selectedLimit]);

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
