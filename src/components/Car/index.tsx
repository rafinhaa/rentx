import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSvg from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcons } from "../../utils/getAccessoryIcons";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

interface Props extends RectButtonProps {
  data: CarDTO;
}

const Car: React.FC<Props> = ({ data, ...rest }) => {
  const MotorIcon = getAccessoryIcons(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
};

export default Car;
