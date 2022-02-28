import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  margin-bottom: 8px;
  ${({ isFocused, theme: { colors } }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${colors.main};
    `};
`;

export const IconContainer = styled.View`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
`;

export const InputText = styled.TextInput`
  flex: 1;
  padding: 0 23px;

  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  font-size: ${RFValue(15)}px;

  background-color: ${({ theme: { colors } }) => colors.background_secondary};
  color: ${({ theme: { colors } }) => colors.text};
`;
