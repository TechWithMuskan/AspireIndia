import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { getCardFormat } from "../../../utils/constants";
import { AspireLogo, VisaLogo } from "../../../theme/svgs";
import universalStyle from "../../../theme/universalStyle";
import IconButton from "../../../components/atoms/iconButton";

const DebitCard = () => {
  const [cardNum, setCardNum] = useState("5647341124132020");
  const [label, setLabel] = useState("Show card number");
  const [cvv, setCvv] = useState("456");

  const hideNum = () => {
    let currentNum = cardNum;
    setCardNum(`••••••••••••${currentNum.slice(12, 16)}`);
    setLabel("Show card number");
    setCvv("***");
  };

  const showNum = () => {
    setCardNum(`5647341124132020`);
    setLabel("Hide card number");
    setCvv("456");
  };

  return (
    <>
      <View style={styles.showCard}>
        <IconButton
          onPress={label === "Show card number" ? showNum : hideNum}
          label={label}
        />
      </View>

      <View style={styles.deditCard}>
        <View style={universalStyle.alignEnd}>
          <AspireLogo />
        </View>
        <Text style={styles.username}>Mark Henry</Text>
        <Text style={styles.cardNumber}>{getCardFormat(cardNum)}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.thru}>Thru: 12/20</Text>
          <Text style={[styles.cvv, styles.thru]}>CVV: {cvv}</Text>
        </View>
        <View style={universalStyle.alignEnd}>
          <VisaLogo />
        </View>
      </View>
    </>
  );
};

export default DebitCard;
