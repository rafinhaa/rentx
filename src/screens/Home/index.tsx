import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNetInfo } from "@react-native-community/netinfo";
import { synchronize } from "@nozbe/watermelondb/sync";
import { database } from "../../database";
import { Car as ModelCar } from "../../database/models/Car";

import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import LoaderAnimated from "../../components/LoaderAnimated";
import { AppRoutesParamList } from "../../routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";

type HomeNavigationProps = NativeStackNavigationProp<AppRoutesParamList>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [cars, setCars] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);
  const netInfo = useNetInfo();

  function handleCarDetails(car: ModelCar) {
    navigation.navigate("CarDetails", { car });
  }

  const offlineSynchronize = async () => {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const {
          data: { changes, latestVersion },
        } = await api.get(
          `/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`
        );
        return { changes, timestamp: latestVersion };
      }, // vai no backend busca por atualizações
      pushChanges: async ({ changes }) => {
        const { users } = changes;
        console.warn(users);
        if (users.updated.length > 0) {
          await api.post("/users/sync", users);
        }
      }, // envia as atualizações para o backend
    });
  };

  useEffect(() => {
    let isMounted = true;
    async function loadCars() {
      try {
        setLoading(true);
        const carCollection = database.get<ModelCar>("cars");
        const cars = await carCollection.query().fetch();
        if (isMounted) {
          setCars(cars);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadCars();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (netInfo.isConnected) {
      offlineSynchronize();
    }
  }, [netInfo.isConnected]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>
      {loading ? (
        <LoaderAnimated />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
