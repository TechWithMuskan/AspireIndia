import { View } from "react-native";
import React from "react";
import Container from "../containers/container";
import CardServices from "../components/organisms/cardServices";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <CardServices />
      </Container>
    </View>
  );
};

export default Home;
