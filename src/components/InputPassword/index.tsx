import React, { useState } from "react";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

import {
  Container,
  IconContainer,
  InputText,
  ChangePasswordVisibilityButton,
} from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

const InputPassword: React.FC<InputProps> = ({ iconName, value, ...rest }) => {
  const { colors } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((state) => !state);
  };

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
        secureTextEntry={isPasswordVisible}
        isFocused={isFocused}
        {...rest}
      />
      <ChangePasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={colors.text_detail}
          />
        </IconContainer>
      </ChangePasswordVisibilityButton>
    </Container>
  );
};

export default InputPassword;
