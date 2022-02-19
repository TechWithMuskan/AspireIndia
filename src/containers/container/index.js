import { View, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "../../components/molecules/header";

const Container = (props) => {
  const { children, extraStyles, headerContent, headerTitle, showBack } = props;

  return (
    <View style={styles.container}>
      <Header
        children={headerContent}
        title={headerTitle}
        showBack={showBack}
      />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={[styles.containerView, extraStyles]}
        contentContainerStyle={styles.contentStyle}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Container;
