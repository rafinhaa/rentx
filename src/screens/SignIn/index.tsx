import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, Header, Form, Title, SubTitle, Footer } from "./styles";

const SignIn: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos{"\n"}quase lá</Title>
        <SubTitle>
          Faça seu login para começar{"\n"}uma experiência incrível.
        </SubTitle>
      </Header>
      <Form>
        <Input />
        <Input />
      </Form>
      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          enabled={true}
          loading={false}
          color={colors.background_secondary}
          light
        />
      </Footer>
    </Container>
  );
};

export default SignIn;
