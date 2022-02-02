import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { useNavigation } from "@react-navigation/native";

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

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

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
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
};

export default Home;
