import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import BackButton from "../../components/BackButton";
import { CarDTO } from "../../dtos/CarDTO";
import api from "../../services/api";
import { useTheme } from "styled-components/native";
import { AppRoutesParamList } from "../../routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoaderAnimated from "../../components/LoaderAnimated";
import { AntDesign } from "@expo/vector-icons";
import { Car as ModelCar } from "../../database/models/Car";
import Car from "../../components/Car";
import { format, parseISO } from "date-fns";

type MyCarsDetailsNavigationProps =
  NativeStackNavigationProp<AppRoutesParamList>;

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarsList,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";

export interface MyCarsProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export interface DataProps {
  id: string;
  car: ModelCar;
  start_date: string;
  end_date: string;
}

const MyCars: React.FC = () => {
  const [cars, setCars] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<MyCarsDetailsNavigationProps>();
  const theme = useTheme();

  function goBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function loadCars() {
      setLoading(true);
      try {
        const { data } = await api.get<DataProps[]>("/rentals");
        const dataFormatted = data.map((data: DataProps) => {
          return {
            id: data.id,
            car: data.car,
            start_date: format(parseISO(data.start_date), "dd/MM/yyyy"),
            end_date: format(parseISO(data.end_date), "dd/MM/yyyy"),
          };
        });
        setCars(dataFormatted);
      } catch (error) {
        Alert.alert("Erro ao carregar os carros");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadCars();
  }, []);
  return (
    <Container>
      <Header>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <BackButton onPress={goBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de inicío {"\n"}e fim do aluguel
        </Title>
        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>
      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>
        {loading ? (
          <LoaderAnimated />
        ) : (
          <CarsList
            data={cars}
            keyExtractor={(car) => String(car.id)}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={24}
                      color={theme.colors.text}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.end_date}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        )}
      </Content>
    </Container>
  );
};

export default MyCars;
