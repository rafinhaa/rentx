import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
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

export const ChangePasswordVisibilityButton = styled(BorderlessButton)``;
