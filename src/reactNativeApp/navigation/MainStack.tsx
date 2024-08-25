import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserList from "../screens/UserList";
import UserDetail from "../screens/UserDetail";

type Address = {
  street: {
    number: string;
    name: string;
  };
  city: string;
  state: string;
  country: string;
};

type UserName = {
  title: string;
  first: string;
  last: string;
};

export type RootStackParamList = {
  userList: undefined;
  userDetail: {
    image: string;
    name: UserName;
    email: string;
    phoneNumber: string;
    address: Address;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="userList">
        <Stack.Screen
          name="userList"
          component={UserList}
          navigationKey="userList"
          options={{
            title: "Lista de usuarios",
          }}
        />
        <Stack.Screen
          name="userDetail"
          component={UserDetail}
          options={{
            title: "Detalle",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
