import React from "react";
import { View, Text } from "react-native";
import Container from "../containers/container";
import universalStyle from "../theme/universalStyle";

const Profile = () => {
  return (
    <Container
      headerTitle="Profile"
      extraStyles={universalStyle.background}
      contentStyle={universalStyle.flex1}
      showBack
    >
      <View style={universalStyle.subContainer}>
        <Text style={universalStyle.title}>Profile Screen</Text>
      </View>
    </Container>
  );
};

export default Profile;
