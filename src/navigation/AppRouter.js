import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DebitCard from "../screens/DebitCard";
import SpendingLimit from "../components/organisms/spendingLimit";
import BottomTab from "../navigation/bottomTab";

const Stack = createStackNavigator();

const options = {
  headerShown: false,
};

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={options}
        />
        <Stack.Screen
          name="SpendingLimit"
          component={SpendingLimit}
          options={options}
        />
        <Stack.Screen
          name="DebitCard"
          component={DebitCard}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
