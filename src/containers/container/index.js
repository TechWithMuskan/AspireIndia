import { View, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "../../components/molecules/header";

const Container = (props) => {
  const { children, scrollEnabled, extraStyles } = props;

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        style={[styles.containerView, extraStyles]}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Container;
