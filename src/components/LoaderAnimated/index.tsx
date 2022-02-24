import React from "react";
import LottieView from "lottie-react-native";
import loadingCar from "../../assets/loader_animated.json";

import { Container } from "./styles";

const LoaderAnimated: React.FC = () => {
  return (
    <Container>
      <LottieView
        style={{ height: 200 }}
        resizeMode="contain"
        source={loadingCar}
        autoPlay
        loop
      />
    </Container>
  );
};

export default LoaderAnimated;
