import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/navigation/bottomTab";
import { colors } from "./src/theme";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={colors.appSecondary}
        barStyle="light-content"
      />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
