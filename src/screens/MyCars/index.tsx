import React, { useEffect } from "react";
import { Alert } from "react-native";
import { CarDTO } from "src/dtos/CarDTO";
import api from "../../services/api";

import { Container } from "./styles";

const MyCars: React.FC = () => {
  const [cars, setCars] = React.useState<CarDTO>({} as CarDTO);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function loadCars() {
      setLoading(true);
      try {
        const response = await api.get("/schedules_byuser/?user_id=1");
        setCars(response.data);
      } catch (error) {
        Alert.alert("Erro ao carregar os carros");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadCars();
  }, []);
  return <Container></Container>;
};

export default MyCars;
