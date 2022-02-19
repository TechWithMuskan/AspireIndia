import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import CardDetail from "../../../containers/cardDetail";

const Header = () => {
  return (
    <View style={styles.container}>
      <CardDetail />
    </View>
  );
};

export default Header;
