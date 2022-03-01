import { CarDTO } from "../dtos/CarDTO";

export type AppRoutesParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
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
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      cnh: string;
    };
  };
};
