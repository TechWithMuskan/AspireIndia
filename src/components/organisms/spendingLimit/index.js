import { View } from "react-native";
import React from "react";
import Container from "../../../containers/container";
import UpdateLimit from "../../molecules/updateLimit";
import universalStyle from "../../../theme/universalStyle";

const SpendingLimit = () => {
  return (
    <Container
      extraStyles={universalStyle.background}
      contentStyle={universalStyle.flex1}
      showBack
      headerTitle="Spending limit"
    >
      <View style={universalStyle.subContainer}>
        <UpdateLimit />
      </View>
    </Container>
  );
};

export default SpendingLimit;
