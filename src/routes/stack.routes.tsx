import React from "react";

import Home from "../../src/screens/Home";
import CarDetails from "../../src/screens/CarDetails";
import Scheduling from "../../src/screens/Scheduling";
import SchedulingDetails from "../../src/screens/SchedulingDetails";
import SchedulingComplete from "../../src/screens/SchedulingComplete";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarDTO } from "../dtos/CarDTO";

const { Navigator, Screen } = createNativeStackNavigator();

export type AppRoutesParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
};

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}
