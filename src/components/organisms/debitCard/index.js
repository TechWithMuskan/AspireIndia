import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { getCardFormat, getCvv } from "../../../utils/constants";
import { AspireLogo, VisaLogo } from "../../../theme/svgs";
import universalStyle from "../../../theme/universalStyle";
import IconButton from "../../../components/atoms/iconButton";

const DebitCard = () => {
  const [cardData, setCardData] = useState({
    cardHolder: "",
    cardNum: 0,
    cvv: 0,
    thru: "",
  });

  const [showDetail, setShow] = useState(false);

  const cardDetail = useSelector((state) => state.common.cardDetail);

  useEffect(() => {
    setCardData(cardDetail);
  }, [cardDetail]);

  const onClick = () => {
    setShow(!showDetail);
  };

  return (
    <View style={styles.container}>
      <View style={styles.showCard}>
        <IconButton
          onPress={onClick}
          showDetail={showDetail}
          label={showDetail ? "Hide card number" : "Show card number"}
        />
      </View>

      <View style={styles.deditCard}>
        <View style={universalStyle.alignEnd}>
          <AspireLogo />
        </View>
        <Text style={styles.username}>{cardData.cardHolder}</Text>
        <Text style={styles.cardNumber}>
          {cardData.cardNum ? getCardFormat(cardData.cardNum, showDetail) : ""}
        </Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.thru}>Thru: {cardData.thru}</Text>
          <Text style={[styles.cvv, styles.thru]}>
            CVV: {getCvv(cardData.cvv, showDetail)}
          </Text>
        </View>
        <View style={universalStyle.alignEnd}>
          <VisaLogo />
        </View>
      </View>
    </View>
  );
};

export default DebitCard;
