import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Car as ModelCar } from "../../database/models/Car";
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
  data: ModelCar;
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
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
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
