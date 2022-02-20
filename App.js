import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { colors } from "./src/theme";
import AppRouter from "./src/navigation/AppRouter";
import universalStyle from "./src/theme/universalStyle";
import startMockServer from "./src/redux/api";
import configStore from "./src/store/ConfigStore";

const App = () => {
  const { store } = configStore();
  startMockServer();
  return (
    <Provider store={store}>
      <SafeAreaView style={universalStyle.safeArea}>
        <StatusBar
          backgroundColor={colors.appSecondary}
          barStyle="light-content"
        />
        <AppRouter />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
