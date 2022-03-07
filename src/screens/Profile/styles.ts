import styled, { css } from "styled-components/native";
import {
  BorderlessButton,
  RectButton,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface OptionsProps {
  active: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 227px;
  background-color: ${({ theme: { colors } }) => colors.header};
  padding: 0 24px;
  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  color: ${({ theme: { colors } }) => colors.shape};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme: { colors } }) => colors.shape};
  margin-top: 48px;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({ theme: { colors } }) => colors.main};
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 122px;
`;

export const Options = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme: { colors } }) => colors.line};
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const Option = styled(TouchableOpacity)<OptionsProps>`
  padding-bottom: 14px;
  ${({ active }) =>
    active &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme: { colors } }) => colors.main};
    `}
`;

export const OptionTitle = styled.Text<OptionsProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme: { fonts }, active }) =>
    active ? fonts.secondary_600 : fonts.secondary_400};
  color: ${({ theme: { colors }, active }) =>
    active ? colors.header : colors.text_detail};
`;

export const Section = styled.View``;
