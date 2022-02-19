import { View } from "react-native";
import React from "react";
import styles from "./styles";
import DebitCard from "../debitCard";
import CardDetail from "../cardDetail";

const Container = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <CardDetail />
      </View>
      <View style={styles.bottomContainer}></View>
      <DebitCard />
    </View>
  );
};

export default Container;
