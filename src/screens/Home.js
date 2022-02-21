import React from "react";
import { View, Text } from "react-native";
import Container from "../containers/container";
import universalStyle from "../theme/universalStyle";

const Home = () => {
  return (
    <Container
      headerTitle="Home"
      extraStyles={universalStyle.background}
      contentStyle={universalStyle.flex1}
    >
      <View style={universalStyle.subContainer}>
        <Text style={universalStyle.title}>Home Screen</Text>
      </View>
    </Container>
  );
};

export default Home;
