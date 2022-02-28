import React from "react";
import { useNavigation } from "@react-navigation/native";

import { AppRoutesParamList } from "../../../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Input from "../../../components/Input";
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

type SignUpNavigationProps = NativeStackNavigationProp<
  AppRoutesParamList,
  "SignUpSecondStep"
>;

export const FirstStep: React.FC = () => {
  const navigation = useNavigation<SignUpNavigationProps>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSecondStep = () => {
    navigation.navigate("SignUpSecondStep");
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
            <FormTitle>1. Dados</FormTitle>
            <Input iconName="user" placeholder="Nome" />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
            />
          </Form>
          <Button title="Próximo" onPress={handleSecondStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FirstStep;
