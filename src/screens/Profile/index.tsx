import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";

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
  Content,
  Options,
  Option,
  OptionTitle,
} from "./styles";

interface OptionProps {
  option: "dataEdit" | "passwordEdit";
}

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [option, setOption] = useState<OptionProps>({
    option: "dataEdit",
  } as OptionProps);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignOut = () => {
    console.log("Sign out");
  };

  const handleOptionsChange = (option: OptionProps) => {
    setOption(option);
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
      <Content>
        <Options>
          <Option
            onPress={() => handleOptionsChange({ option: "dataEdit" })}
            active={option.option === "dataEdit"}
          >
            <OptionTitle active={option.option === "dataEdit"}>
              Dados
            </OptionTitle>
          </Option>
          <Option
            onPress={() => handleOptionsChange({ option: "passwordEdit" })}
            active={option.option === "passwordEdit"}
          >
            <OptionTitle active={option.option === "passwordEdit"}>
              Trocar senha
            </OptionTitle>
          </Option>
        </Options>
      </Content>
    </Container>
  );
};

export default Profile;
