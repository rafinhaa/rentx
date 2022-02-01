import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { ThemeProvider } from "styled-components/native";

import Home from "./src/screens/Home";
import CarDetails from "./src/screens/CarDetails";
import Scheduling from "./src/screens/Scheduling";
import SchedulingDetails from "./src/screens/SchedulingDetails";
import AppLoading from "expo-app-loading";
import theme from "./src/styles/theme";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <SchedulingDetails />
    </ThemeProvider>
  );
};

export default App;
