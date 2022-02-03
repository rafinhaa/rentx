import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

const Load: React.FC = () => {
  const { colors } = useTheme();
  return (
    <ActivityIndicator
      color={colors.main}
      size="large"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
};

export default Load;
