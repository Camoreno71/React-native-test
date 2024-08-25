import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserList from "../screens/UserList";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="user-list">
        <Stack.Screen
          name="user-list"
          component={UserList}
          navigationKey="user-list"
          options={{
            title: "Lista de usuarios",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
