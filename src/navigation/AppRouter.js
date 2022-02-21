import React from "react";
import SpendingLimit from "../components/organisms/spendingLimit";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "../navigation/bottomTab";
import { createStackNavigator } from "@react-navigation/stack";
import DebitCard from "../screens/DebitCard";

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
