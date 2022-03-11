import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";

import { useAuth } from "../hooks/auth";

import LoaderAnimated from "../components/LoaderAnimated";

const Routes: React.FC = () => {
  const {
    user: { id },
    loading,
  } = useAuth();

  return loading ? (
    <LoaderAnimated />
  ) : (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {id ? <AppTabRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Routes;
