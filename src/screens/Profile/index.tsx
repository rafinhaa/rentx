import { useNavigation } from "@react-navigation/core";
import React from "react";

import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import BackButton from "../../components/BackButton";

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
} from "./styles";

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignOut = () => {
    console.log("Sign out");
  };

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={colors.shape} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={handleSignOut}>
            <Feather name="power" size={24} color={colors.shape} />
          </LogoutButton>
        </HeaderTop>
        <PhotoContainer>
          <Photo source={{ uri: "https://github.com/rafinhaa.png" }} />
          <PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
};

export default Profile;
