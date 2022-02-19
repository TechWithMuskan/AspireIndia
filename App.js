import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { colors } from "./src/theme";
import AppRouter from "./src/navigation/AppRouter";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={colors.appSecondary}
        barStyle="light-content"
      />
      <AppRouter />
    </SafeAreaView>
  );
};

export default App;
