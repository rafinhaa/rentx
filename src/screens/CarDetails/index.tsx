import React from "react";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import Accessory from "../../components/Accessory";
import Button from "../../components/Button";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Price,
  Period,
  About,
  Accessories,
  Footer,
} from "./styles";

const CarDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://production.autoforce.com/uploads/version/profile_image/5505/model_main_comprar-prestige-plus-40-tfsi-s-tronic_7243435b0b.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborguine</Brand>
            <Name>Hurucan</Name>
          </Description>
          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>
        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur egestas, nisl nisi consectetur tortor,
          eget tincidunt nisl nisi eget.
        </About>
      </Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

export default CarDetails;
