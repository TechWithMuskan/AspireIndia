import React, { useState } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { Limit } from "../../../theme/svgs";
import { ratioHeight, ratioWidth } from "../../../theme";
import TransparentButton from "../../atoms/transparentButton";
import PrimaryButton from "../../atoms/primaryButton";
import { priceList } from "../../../global/config";
import { setWeeklySpending } from "../../../redux/action";
import Button from "../../atoms/button";
import styles from "./styles";
import { formatCurrency } from "../../../utils/constants";

const UpdateLimit = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true);
  const [amount, setAmount] = useState();

  const onSelect = (value) => {
    setDisabled(false);
    setAmount(value);
  };

  const saveSpendingLimit = () => {
    dispatch(setWeeklySpending(amount));
    navigation.navigate("BottomTab");
    setAmount(null);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.subContainer}>
          <Limit height={20 * ratioHeight} width={20 * ratioWidth} />
          <Text style={styles.title}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Button label="S$" />
          <Text style={styles.amount}>{amount && formatCurrency(amount)}</Text>
        </View>
        <Text style={styles.detail}>
          Here weekly means the last 7 days - not the calendar week
        </Text>

        <View style={styles.bottomContainer}>
          {priceList.map((item) => (
            <TransparentButton
              title={`S$ ${formatCurrency(item.price)}`}
              onPress={() => onSelect(item.price)}
            />
          ))}
        </View>
      </View>
      <PrimaryButton
        disabled={disabled}
        title="Save"
        onPress={saveSpendingLimit}
      />
    </View>
  );
};

export default UpdateLimit;
