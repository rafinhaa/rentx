import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Dimensions } from "react-native";
import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import { AppRoutesParamList } from "../../routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

import { Container } from "./styles";

const WIDTH = Dimensions.get("window").width;

type SplashNavigationProps = NativeStackNavigationProp<AppRoutesParamList>;

const Splash: React.FC = () => {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation<SplashNavigationProps>();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
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
            [-50, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  async function startApp() {
    navigation.navigate("SignIn");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2000 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
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
