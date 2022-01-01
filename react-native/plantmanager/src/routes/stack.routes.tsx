import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Confirmation from "../screens/Confirmation";
import UserIdentification from "../screens/UserIdentification";
import Welcome from "../screens/Welcome";

import colors from "../styles/colors";

export type StackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: { userName: string };
};

const stackRoutes = createStackNavigator<StackParamList>();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
