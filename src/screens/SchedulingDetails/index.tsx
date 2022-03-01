import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import Accessory from "../../components/Accessory";
import Button from "../../components/Button";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Price,
  Period,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateTitle,
  DateInfo,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceTotal,
  RentalPriceQuota,
} from "./styles";

import { RFValue } from "react-native-responsive-fontsize";
import { CarDTO } from "src/dtos/CarDTO";
import { AppRoutesParamList } from "src/routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { getAccessoryIcons } from "../../utils/getAccessoryIcons";
import { format } from "date-fns";
import { getPlataformDate } from "../../utils/getPlataformDate";
import api from "../../services/api";
import { Alert } from "react-native";

interface Params {
  car: CarDTO;
  dates: string[];
}

type SchedulingDetailsNavigationProps =
  NativeStackNavigationProp<AppRoutesParamList>;
type ScreenParams = RouteProp<AppRoutesParamList, "SchedulingDetails">;

interface RentalPeriod {
  start: string;
  end: string;
}

const SchedulingDetails: React.FC = () => {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const theme = useTheme();
  const {
    params: { car, dates },
  } = useRoute<ScreenParams>();
  const navigation = useNavigation<SchedulingDetailsNavigationProps>();
  const rentalTotal = Number(dates.length * car.price);
  const [loading, setLoading] = useState(false);

  async function handleConfirmRental() {
    setLoading(true);
    const schedulesByCar = await api(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post("/schedules_byuser", {
      user_id: 1,
      car,
      startDate: format(getPlataformDate(new Date(dates[0])), "dd/MM/yyyy"),
      endDate: format(
        getPlataformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then(() =>
        navigation.navigate("Confirmation", {
          screenProps: {
            title: "Carro alugado!",
            message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel`,
            nextScreenRoute: "Home",
          },
        })
      )
      .catch((error) => {
        setLoading(false);
        Alert.alert(
          "Erro ao agendar",
          "Ocorreu um erro ao agendar o carro, tente novamente mais tarde."
        );
        console.log(error);
      });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlataformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>
        <ImageSlider photos={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcons(accessory.type)}
            />
          ))}
        </Accessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
