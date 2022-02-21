import React, { useEffect } from "react";

import { Button, StyleSheet, Dimensions } from "react-native";
import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { Container } from "./styles";

const WIDTH = Dimensions.get("window").width;

const Splash: React.FC = () => {
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -WIDTH],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [0, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-WIDTH, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 5000 });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
};

export default Splash;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
