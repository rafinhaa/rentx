import React from "react";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

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
        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur egestas, nisl nisi consectetur tortor,
          eget tincidunt nisl nisi eget.
        </About>
      </Content>
    </Container>
  );
};

export default CarDetails;
