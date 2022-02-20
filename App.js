import { StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { colors } from "./src/theme";
import AppRouter from "./src/navigation/AppRouter";
import universalStyle from "./src/theme/universalStyle";

const App = () => {
  return (
    <SafeAreaView style={universalStyle.safeArea}>
      <StatusBar
        backgroundColor={colors.appSecondary}
        barStyle="light-content"
      />
      <AppRouter />
    </SafeAreaView>
  );
};

export default App;
