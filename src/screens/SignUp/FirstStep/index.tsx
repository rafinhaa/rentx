import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../../../components/BackButton";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";
import Bullet from "../../../components/Bullet";

export const FirstStep: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
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
      </Form>
    </Container>
  );
};

export default FirstStep;
