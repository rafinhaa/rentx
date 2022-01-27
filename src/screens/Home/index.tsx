import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent } from "./styles";

import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";

const Home: React.FC = () => {
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
      <Car data={carData} />
    </Container>
  );
};

export default Home;
