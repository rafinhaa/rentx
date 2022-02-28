import styled, { css } from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
  ${({ isFocused, theme: { colors } }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${colors.main};
    `};
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  padding: 0 23px;

  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  font-size: ${RFValue(15)}px;

  background-color: ${({ theme: { colors } }) => colors.background_secondary};
  color: ${({ theme: { colors } }) => colors.text};

  ${({ isFocused, theme: { colors } }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${colors.main};
    `};
`;

export const ChangePasswordVisibilityButton = styled(BorderlessButton)``;
