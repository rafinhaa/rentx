import React from "react";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const Input: React.FC<InputProps> = ({ iconName }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Feather name={iconName} size={24} color={colors.text_detail} />
      <Field></Field>
      <Visible></Visible>
    </Container>
  );
};

export default Input;
