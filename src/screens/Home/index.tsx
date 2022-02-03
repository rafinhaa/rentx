import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import Load from "../../components/Load";

import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const carData = {
    brand: "Audi",
    name: "RS 5 TS",
    rent: {
      period: "dia",
      price: "1.500,00",
    },
    thumbnail:
      "https://production.autoforce.com/uploads/version/profile_image/5505/model_main_comprar-prestige-plus-40-tfsi-s-tronic_7243435b0b.png",
  };
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  function handleCarDetails() {
    navigation.navigate("CarDetails");
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
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
