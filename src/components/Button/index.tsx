import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Loader, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  color,
  loading = false,
  light = false,
  ...rest
}) => {
  return (
    <Container {...rest} color={color}>
      {loading ? <Loader /> : <Title light={light}>{title}</Title>}
    </Container>
  );
};

export default Button;
