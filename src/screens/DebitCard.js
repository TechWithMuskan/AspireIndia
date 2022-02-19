import { View, StyleSheet } from "react-native";
import React from "react";
import Container from "../containers/container";
import CardDetail from "../components/organisms/cardDetail";
import CardServices from "../components/organisms/cardServices";
import Card from "../components/organisms/debitCard";
import { ratioWidth } from "../theme";

const DebitCard = () => {
  return (
    <View style={styles.container}>
      <Container
        extraStyles={styles.subContainer}
        headerContent={<CardDetail />}
        headerTitle="Debit Card"
      >
        <Card />
        <CardServices />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 15 * ratioWidth,
  },
});

export default DebitCard;
