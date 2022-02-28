import React, { useState } from "react";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

const Input: React.FC<InputProps> = ({ iconName, value, ...rest }) => {
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={isFocused || isFilled ? colors.main : colors.text_detail}
        />
      </IconContainer>
      <InputText
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
        {...rest}
      />
    </Container>
  );
};

export default Input;
