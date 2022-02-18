import React from "react";

import { Button, StyleSheet } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Container } from "./styles";

const Splash: React.FC = () => {
  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });

  function handleAnimatedPosition() {
    animation.value++;
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
