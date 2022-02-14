import React from "react";
import { FlatList } from "react-native";

import {
  Container,
  ImageIndexes,
  ImagesIndex,
  CarImageWrapper,
  CarImage,
  ImageCarList,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

const ImageSlider: React.FC<Props> = ({ imagesUrl }) => {
  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImagesIndex key={index} active={true} />
        ))}
      </ImageIndexes>
      <ImageCarList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
};

export default ImageSlider;
