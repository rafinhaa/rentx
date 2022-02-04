import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
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
import { format } from "date-fns/esm";
import { getPlataformDate } from "../../utils/getPlataformDate";
import { Alert } from "react-native";

interface Params {
  car: CarDTO;
}

type SchedulingNavigationProps = NativeStackNavigationProp<
  AppRoutesParamList,
  "Scheduling"
>;

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

const Scheduling: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<SchedulingNavigationProps>();
  const { car } = useRoute().params as Params;
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  function handleConfirmRental() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert("Aviso", "Selecione um período para a locação");
      return;
    }
    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
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
    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    setRentalPeriod({
      startFormatted: format(
        getPlataformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlataformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  }

  function goBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <BackButton onPress={goBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de inicío {"\n"}e fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateValueContainer selected={!!rentalPeriod.startFormatted}>
              <DateTitle>DE</DateTitle>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateValueContainer selected={!!rentalPeriod.endFormatted}>
              <DateTitle>ATÉ</DateTitle>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
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
