import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import universalStyle from "../../../theme/universalStyle";
import Button from "../../../components/atoms/button";
import { fetchBalance } from "../../../redux/action";
import { formatCurrency } from "../../../utils/constants";

const CardDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, []);

  let debitCard = useSelector((state) => state.common.debitCard);

  return (
    <View>
      <Text style={styles.balance}>Available balance</Text>
      <View style={universalStyle.row}>
        <Button label="S$" extraStyle={styles.buttonStyle} />
        <Text style={styles.title}>
          {debitCard?.balance && formatCurrency(debitCard?.balance)}
        </Text>
      </View>
    </View>
  );
};

export default CardDetail;
