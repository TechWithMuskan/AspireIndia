import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { getCardFormat } from "../../utils/constants";
import { AspireLogo, VisaLogo } from "../../theme/svgs";

const DebitCard = () => {
  const [cardNum, setCardNum] = useState("5647341124132020");

  const hideNum = () => {
    let currentNum = cardNum;
    setCardNum(`••••••••••••${currentNum.slice(12, 16)}`);
  };

  const showNum = () => {
    setCardNum(`5647341124132020`);
  };

  return (
    <View style={styles.deditCard}>
      <View style={styles.logo}>
        <AspireLogo />
      </View>
      <Text style={styles.username}>Mark Henry</Text>
      <Text style={styles.cardNumber}>{getCardFormat(cardNum)}</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.thru}>Thru: 12/20</Text>
        <Text style={[styles.cvv, styles.thru]}>CVV: 456</Text>
      </View>
      <View style={styles.logo}>
        <VisaLogo />
      </View>
    </View>
  );
};

export default DebitCard;
