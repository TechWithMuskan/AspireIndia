import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/molecules/header";

const Container = (props) => {
  const {
    children,
    extraStyles,
    headerContent,
    headerTitle,
    showBack,
    contentStyle,
  } = props;

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      style={extraStyles}
      contentContainerStyle={contentStyle}
    >
      <Header
        children={headerContent}
        title={headerTitle}
        showBack={showBack}
      />
      {children}
    </ScrollView>
  );
};

export default Container;
