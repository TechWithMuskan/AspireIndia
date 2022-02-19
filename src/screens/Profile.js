import { View, StyleSheet, Text } from "react-native";
import React from "react";
import Container from "../containers/container";
import { colors, fonts, ratioHeight, ratioWidth } from "../theme";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Container extraStyles={styles.subContainer} headerTitle="Profile">
        <Text style={styles.title}>Profile Screen</Text>
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
  title: {
    fontSize: fonts.size.font20,
    fontFamily: fonts.type.AvenirNextBold,
    color: colors.appPrimary,
    margin: 30 * ratioHeight,
  },
});

export default Profile;
