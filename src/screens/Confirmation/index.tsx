import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppRoutesParamList } from "../../routes/types";
import ConfirmButton from "../../components/ConfirmButton";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";

type navigationProps = NativeStackNavigationProp<AppRoutesParamList>;

type ScreenParams = RouteProp<AppRoutesParamList, "Confirmation">;

const Confirmation: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<navigationProps>();
  const {
    params: {
      screenProps: { title, message, nextScreenRoute },
    },
  } = useRoute<ScreenParams>();

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
        <Footer>
          <ConfirmButton title={"OK"} onPress={handleConfirm} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
