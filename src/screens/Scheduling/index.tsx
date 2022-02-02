import React from "react";
import BackButton from "../../components/BackButton";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueContainer,
  Content,
  Footer,
} from "./styles";
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";

const Scheduling: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }
  return (
    <Container>
      <Header>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de inicío {"\n"}e fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateValueContainer selected={false}>
              <DateTitle>DE</DateTitle>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateValueContainer selected={false}>
              <DateTitle>ATÉ</DateTitle>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar></Calendar>
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
