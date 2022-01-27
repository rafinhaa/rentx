import React from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};

export default BackButton;
