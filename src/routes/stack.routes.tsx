import React from "react";

import Home from "../../src/screens/Home";
import CarDetails from "../../src/screens/CarDetails";
import Scheduling from "../../src/screens/Scheduling";
import SchedulingDetails from "../../src/screens/SchedulingDetails";
import SchedulingComplete from "../../src/screens/SchedulingComplete";
import MyCars from "../../src/screens/MyCars";
import Splash from "../screens/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarDTO } from "../dtos/CarDTO";

const { Navigator, Screen } = createNativeStackNavigator();

export type AppRoutesParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: {
    car: CarDTO;
    dates: {};
  };
  SchedulingComplete: undefined;
  MyCars: undefined;
};

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
