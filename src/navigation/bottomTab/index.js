import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import items from "./items";
import styles from "./styles";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Debit Card"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tab,
      }}
    >
      {items.map((tabs) => (
        <Tab.Screen
          name={tabs.name}
          component={tabs.route}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={focused ? styles.focusedLabel : styles.label}>
                {tabs.name}
              </Text>
            ),
            tabBarIcon: ({ focused }) => {
              const Icon = focused ? tabs.focused : tabs.unfocused;
              return <Icon style={styles.imageStyle} />;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
