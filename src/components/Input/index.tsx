import React from "react";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const Input: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={colors.text_detail} />
      </IconContainer>
      <InputText {...rest} />
    </Container>
  );
};

export default Input;
