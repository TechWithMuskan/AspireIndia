import { View, StyleSheet } from "react-native";
import React from "react";
import Container from "../containers/container";
import CardDetail from "../components/organisms/cardDetail";
import CardServices from "../components/organisms/cardServices";
import Card from "../components/organisms/debitCard";
import { colors, ratioHeight, ratioWidth } from "../theme";

const DebitCard = () => {
  return (
    <View style={styles.container}>
      <Container headerContent={<CardDetail />} headerTitle="Debit Card">
        <View style={styles.subContainer}>
          <Card />
          <CardServices />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appSecondary,
  },
  subContainer: {
    paddingHorizontal: 15 * ratioWidth,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 40 * ratioHeight,
    backgroundColor: colors.white,
    zIndex: 1000,
  },
});

export default DebitCard;
