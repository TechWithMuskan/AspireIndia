import React from "react";
import { View, Text } from "react-native";
import Container from "../containers/container";
import universalStyle from "../theme/universalStyle";

const Credit = () => {
  return (
    <Container
      headerTitle="Credit Card"
      extraStyles={universalStyle.background}
      contentStyle={universalStyle.flex1}
      showBack
    >
      <View style={universalStyle.subContainer}>
        <Text style={universalStyle.title}>Credit Card Screen</Text>
      </View>
    </Container>
  );
};

export default Credit;
