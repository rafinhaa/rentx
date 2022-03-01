import React from "react";

import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import SignUpFirstStep from "../screens/SignUp/FirstStep";
import SignUpSecondStep from "../screens/SignUp/SecondStep";
import Confirmation from "../screens/Confirmation";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
