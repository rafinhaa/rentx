import { CarDTO } from "../dtos/CarDTO";
import { Car as ModelCar } from "../database/models/Car";

export type AppRoutesParamList = {
  Home: undefined;
  CarDetails: { car: ModelCar };
  Scheduling: { car: CarDTO };
  SchedulingDetails: {
    car: CarDTO;
    dates: string[];
  };
  Confirmation: {
    screenProps: {
      title: string;
      message: string;
      nextScreenRoute: keyof AppRoutesParamList;
    };
  };
  MyCars: undefined;
  SignIn: undefined;
  Profile: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      cnh: string;
    };
  };
};
