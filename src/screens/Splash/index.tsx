import React from "react";

import { Button, StyleSheet, Dimensions } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import { Container } from "./styles";

const WIDTH = Dimensions.get("window").width;

const Splash: React.FC = () => {
  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 1000,
            easing: Easing.bounce,
          }),
        },
      ],
    };
  });

  function handleAnimatedPosition() {
    animation.value = Math.random() * (WIDTH - 100);
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Go to Home" onPress={handleAnimatedPosition} />
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
