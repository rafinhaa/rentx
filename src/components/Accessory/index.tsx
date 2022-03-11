import React from "react";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components/native";

import { Container, Name } from "./styles";

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

const Accessory: React.FC<Props> = ({ name, icon: Icon }) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Icon width={32} height={32} fill={colors.header} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Accessory;
