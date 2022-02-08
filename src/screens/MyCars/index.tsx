import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import BackButton from "../../components/BackButton";
import { CarDTO } from "../../dtos/CarDTO";
import api from "../../services/api";
import { useTheme } from "styled-components/native";
import { AppRoutesParamList } from "../../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Load from "../../components/Load";

type MyCarsDetailsNavigationProps = NativeStackNavigationProp<
  AppRoutesParamList,
  "MyCars"
>;

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
} from "./styles";
import Car from "../../components/Car";

export interface MyCarsProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

const MyCars: React.FC = () => {
  const [cars, setCars] = useState<MyCarsProps[]>([]);
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
        const { data } = await api.get<MyCarsProps[]>(
          "/schedules_byuser/?user_id=1"
        );
        setCars(data);
        console.log(cars);
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
          <AppointmentsQuantity>0</AppointmentsQuantity>
        </Appointments>
        {loading ? (
          <Load />
        ) : (
          <CarsList
            data={cars}
            keyExtractor={(car) => String(car.id)}
            renderItem={({ item }) => <Car data={item.car} />}
          />
        )}
      </Content>
    </Container>
  );
};

export default MyCars;
