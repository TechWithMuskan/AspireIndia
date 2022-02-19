import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import universalStyle from "../../../theme/universalStyle";
import Button from "../../../components/atoms/button";

const CardDetail = () => {
  return (
    <View>
      <Text style={styles.balance}>Available balance</Text>
      <View style={universalStyle.row}>
        <Button label="S$" extraStyle={styles.buttonStyle} />
        <Text style={styles.title}>3,000</Text>
      </View>
    </View>
  );
};

export default CardDetail;
