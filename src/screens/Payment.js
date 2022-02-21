import React from "react";
import { View, Text } from "react-native";
import Container from "../containers/container";
import universalStyle from "../theme/universalStyle";

const Payment = () => {
  return (
    <Container
      headerTitle="Payment"
      extraStyles={universalStyle.background}
      contentStyle={universalStyle.flex1}
      showBack
    >
      <View style={universalStyle.subContainer}>
        <Text style={universalStyle.title}>Payment Screen</Text>
      </View>
    </Container>
  );
};

export default Payment;
