import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import universalStyle from "../../../theme/universalStyle";
import { numberWithCommas } from "../../../utils/constants";

const ProgressBar = (props) => {
  const { selectedLimit } = props;

  const [spentLimit, setSpentLmit] = useState(3450);
  const [percentage, setPercentage] = useState();

  useEffect(() => {
    const percent = getPercentage();
    setPercentage(percent);
  }, []);

  const getPercentage = () => {
    let percentage = (spentLimit / selectedLimit) * 100;
    return percentage;
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.title}>Debit card spending limit</Text>
        <View style={universalStyle.row}>
          <Text style={styles.amount}>${numberWithCommas(spentLimit)}</Text>
          <Text style={styles.limit}>
            {` |  $${numberWithCommas(selectedLimit)}`}
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
