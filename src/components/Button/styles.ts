import { ActivityIndicator } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface ButtonProps extends RectButtonProps {
  color: string;
  loading?: boolean;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.main};
  ${({ enabled, loading }) =>
    !loading &&
    !enabled &&
    enabled != undefined &&
    css`
      opacity: 0.5;
    `}
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme: { colors }, light }) =>
    light ? colors.header : colors.shape};
`;

export const Loader = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.shape,
}))``;
