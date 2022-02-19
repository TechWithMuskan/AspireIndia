import { View, Text } from "react-native";
import React from "react";
import { Limit } from "../../../theme/svgs";
import styles from "./styles";
import { ratioHeight, ratioWidth } from "../../../theme";
import Button from "../../atoms/button";
import TransparentButton from "../../atoms/transparentButton";
import PrimaryButton from "../../atoms/primaryButton";
import { priceList } from "../../../global/config";

const UpdateLimit = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.subContainer}>
          <Limit height={20 * ratioHeight} width={20 * ratioWidth} />
          <Text style={styles.title}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <Button label="S$" />
        <Text style={styles.detail}>
          Here weekly means the last 7 days - not the calendar week
        </Text>

        <View style={styles.bottomContainer}>
          {priceList.map((item) => (
            <TransparentButton title={`S$ ${item.price}`} />
          ))}
        </View>
      </View>
      <PrimaryButton title="Save" />
    </View>
  );
};

export default UpdateLimit;
