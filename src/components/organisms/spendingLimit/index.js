import { View, Text } from "react-native";
import React from "react";
import Container from "../../../containers/container";
import styles from "./styles";
import UpdateLimit from "../../molecules/updateLimit";

const SpendingLimit = () => {
  return (
    <View style={styles.container}>
      <Container showBack headerTitle="Spending limit">
        <UpdateLimit />
      </Container>
    </View>
  );
};

export default SpendingLimit;
