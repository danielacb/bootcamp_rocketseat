import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Confirmation from "../screens/Confirmation";
import UserIdentification from "../screens/UserIdentification";
import Welcome from "../screens/Welcome";
import AuthRoutes from "./tabs.routes";

import colors from "../styles/colors";
import SelectedPlant from "../screens/SelectedPlant";
import PlantProps from "../types/plant";

export type StackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: "smile" | "hug";
    nextScreen: string;
  };
  PlantSelection: undefined;
  SelectedPlant: { plant: PlantProps };
  MyPlants: undefined;
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
    <stackRoutes.Screen name="PlantSelection" component={AuthRoutes} />
    <stackRoutes.Screen name="SelectedPlant" component={SelectedPlant} />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
