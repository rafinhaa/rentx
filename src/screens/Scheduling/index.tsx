import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesParamList } from "../../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CarDTO } from "src/dtos/CarDTO";

import Button from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";

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

interface Params {
  car: CarDTO;
}

type SchedulingNavigationProps = NativeStackNavigationProp<
  AppRoutesParamList,
  "Scheduling"
>;

const Scheduling: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<SchedulingNavigationProps>();
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
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
        <Calendar onDayPress={handleChangeDate} markedDates={markedDates} />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
