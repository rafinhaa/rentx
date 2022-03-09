import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNetInfo } from "@react-native-community/netinfo";

import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import LoaderAnimated from "../../components/LoaderAnimated";
import { AppRoutesParamList } from "../../routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";

type HomeNavigationProps = NativeStackNavigationProp<AppRoutesParamList>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const netInfo = useNetInfo();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    let isMounted = true;
    async function loadCars() {
      try {
        setLoading(true);
        const { data } = await api.get("/cars");
        if (isMounted) {
          setCars(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadCars();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (netInfo.isConnected) {
      Alert.alert("Conectado");
    } else {
      Alert.alert("Sem conexão");
    }
  }, [netInfo.isConnected]);

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
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>
      {loading ? (
        <LoaderAnimated />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
