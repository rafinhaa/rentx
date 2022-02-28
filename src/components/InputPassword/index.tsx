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
}

const InputPassword: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const { colors } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((state) => !state);
  };

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={colors.text_detail} />
      </IconContainer>
      <InputText secureTextEntry={isPasswordVisible} {...rest} />
      <ChangePasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
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
