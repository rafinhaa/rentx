import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../../../components/BackButton";

import Bullet from "../../../components/Bullet";
import InputPassword from "../../../components/InputPassword";
import Button from "../../../components/Button";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components/native";

export const SecondeStep: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleGoBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>
          <Title>Crie Sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>
          <Form>
            <FormTitle>2. Senha</FormTitle>
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              keyboardType="email-address"
            />
            <InputPassword
              iconName="lock"
              placeholder="Repetir senha"
              keyboardType="numeric"
            />
          </Form>
          <Button title="Cadastrar" color={colors.success} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SecondeStep;
