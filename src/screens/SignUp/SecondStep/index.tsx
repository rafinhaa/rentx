import React, { useState } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import BackButton from "../../../components/BackButton";

import Bullet from "../../../components/Bullet";
import InputPassword from "../../../components/InputPassword";
import Button from "../../../components/Button";
import { AppRoutesParamList } from "src/routes/stack.routes";

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
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components/native";

type ScreenParams = RouteProp<AppRoutesParamList, "SignUpSecondStep">;

export const SecondeStep: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    params: { user },
  } = useRoute<ScreenParams>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    if (!password || !confirmPassword) {
      return Alert.alert("Atenção", "Preencha todos os campos");
    }
    if (password !== confirmPassword) {
      return Alert.alert("Atenção", "As senhas não conferem");
    }
    //TODO: Salvar usuário na api
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
              onChangeText={setPassword}
              value={password}
            />
            <InputPassword
              iconName="lock"
              placeholder="Repetir senha"
              keyboardType="numeric"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </Form>
          <Button title="Cadastrar" color={colors.success} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SecondeStep;
