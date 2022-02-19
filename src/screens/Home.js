import { View, StyleSheet } from "react-native";
import React from "react";
import Container from "../containers/container";
import CardServices from "../components/organisms/cardServices";
import DebitCard from "../containers/debitCard";
import { ratioWidth } from "../theme";

const Home = () => {
  return (
    <View style={styles.container}>
      <Container extraStyles={styles.subContainer}>
        <DebitCard />
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

export default Home;
