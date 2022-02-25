import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme: { colors } }) => colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  color: ${({ theme: { colors } }) => colors.title};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  color: ${({ theme: { colors } }) => colors.text};
  line-height: ${RFValue(25)}px;
  margin-top: ${RFValue(16)}px;
`;

export const Footer = styled.View``;
