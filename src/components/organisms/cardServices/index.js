import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import ServiceCard from "../../atoms/serviceCard";
import {
  Insight,
  Transfer,
  Freeze,
  NewCard,
  Deactivate,
} from "../../../theme/svgs";
import { saveSpendingLimit } from "../../../redux/action";
import styles from "./styles";

const CardServices = (props) => {
  const { selectedLimit } = props;

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [spLimit, setSpLimit] = useState(false);
  const [freeze, setFreeze] = useState(false);

  useEffect(() => {
    if (selectedLimit) {
      setSpLimit(true);
    } else {
      setSpLimit(false);
    }
  }, [isFocused, selectedLimit]);

  const onSwitch = (value, type) => {
    if (type == "weekly") {
      setSpLimit(!spLimit);
      if (!selectedLimit && value) {
        navigation.navigate("SpendingLimit");
      } else if (selectedLimit && !value) {
        dispatch(saveSpendingLimit(""));
      }
    } else {
      setFreeze(!freeze);
    }
  };

  const onNavigate = () => {
    navigation.navigate("SpendingLimit");
  };

  return (
    <View style={styles.container}>
      <ServiceCard
        Icons={Insight}
        title="Top-up account"
        description="Deposit money to your account to use with card"
      />
      <ServiceCard
        showToggle
        value={spLimit}
        Icons={Transfer}
        cardPress={onNavigate}
        onPress={(value) => onSwitch(value, "weekly")}
        title="Weekly spending limit"
        description="You haven’t set any spending limit on card"
      />
      <ServiceCard
        showToggle
        value={freeze}
        onPress={(value) => onSwitch(value, "freeze")}
        Icons={Freeze}
        title="Freeze card"
        description="Your debit card is currently active"
      />
      <ServiceCard
        Icons={NewCard}
        title="Get a new card"
        description="This deactivates your cureent debit card"
      />
      <ServiceCard
        Icons={Deactivate}
        title="Deactivated cards"
        description="Your previously deactivated cards"
      />
    </View>
  );
};

export default CardServices;
