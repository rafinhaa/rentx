import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useAuth } from "../../hooks/auth";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import BackButton from "../../components/BackButton";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

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
  Section,
} from "./styles";

interface OptionProps {
  option: "dataEdit" | "passwordEdit";
}

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { user, signOut } = useAuth();
  const [option, setOption] = useState<OptionProps>({
    option: "dataEdit",
  } as OptionProps);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(user.avatar);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignOut = () => {
    try {
      signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionsChange = (option: OptionProps) => {
    setOption(option);
  };

  const handleSelectAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }
    const { uri } = result as ImageInfo;
    if (uri) {
      setAvatar(uri);
    }
  };
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              {!!avatar && <Photo source={{ uri: avatar }} />}
              <PhotoButton onPress={handleSelectAvatar}>
                <Feather name="camera" size={24} color={colors.shape} />
              </PhotoButton>
            </PhotoContainer>
          </Header>
          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
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
            {option.option === "dataEdit" ? (
              <Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCorrect={false}
                  defaultValue={user.name}
                  onChangeText={setName}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                  onChangeText={setDriverLicense}
                />
              </Section>
            ) : (
              <Section>
                <InputPassword iconName="lock" placeholder="Senha atual" />
                <InputPassword iconName="lock" placeholder="Nova senha" />
                <InputPassword iconName="lock" placeholder="Repetir senha" />
              </Section>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Profile;
