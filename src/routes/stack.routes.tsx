import React from "react";

import Home from "../../src/screens/Home";
import CarDetails from "../../src/screens/CarDetails";
import Scheduling from "../../src/screens/Scheduling";
import SchedulingDetails from "../../src/screens/SchedulingDetails";
import Confirmation from "../screens/Confirmation";
import MyCars from "../../src/screens/MyCars";
import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import SignUpFirstStep from "../screens/SignUp/FirstStep";
import SignUpSecondStep, { SecondeStep } from "../screens/SignUp/SecondStep";

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
  Confirmation: {
    screenProps: {
      title: string;
      message: string;
      nextScreenRoute: keyof AppRoutesParamList;
    };
  };
  MyCars: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      cnh: string;
    };
  };
};

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SecondeStep} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
