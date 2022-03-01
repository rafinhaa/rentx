import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";

import { useAuth } from "../hooks/auth";

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
