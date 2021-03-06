import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { formatCurrency, getPercentage } from "../../../utils/constants";
import universalStyle from "../../../theme/universalStyle";
import styles from "./styles";

const ProgressBar = (props) => {
  const { selectedLimit } = props;

  const [spentLimit, setSpentLimit] = useState(3450);
  const [percentage, setPercentage] = useState();

  const spentAmount = useSelector((state) => state.common.spentAmount);

  useEffect(() => {
    const percent = getPercentage(spentLimit, selectedLimit);
    setPercentage(percent);
    setSpentLimit(spentAmount?.spent);
  }, [spentAmount, selectedLimit]);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.title}>Debit card spending limit</Text>
        <View style={universalStyle.row}>
          <Text style={styles.amount}>${formatCurrency(spentLimit)}</Text>
          <Text style={styles.limit}>
            {` |  $${formatCurrency(selectedLimit)}`}
          </Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.innerProgressBar(percentage)}>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
