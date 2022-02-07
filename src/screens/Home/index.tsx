import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import Load from "../../components/Load";
import { AppRoutesParamList } from "../../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";
import { useTheme } from "styled-components/native";

type HomeNavigationProps = NativeStackNavigationProp<
  AppRoutesParamList,
  "CarDetails"
>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const { colors } = useTheme();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function loadCars() {
      try {
        setLoading(true);
        const { data } = await api.get("/cars");
        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={colors.shape} />
      </MyCarsButton>
    </Container>
  );
};

export default Home;
