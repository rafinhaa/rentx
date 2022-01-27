import React from "react";

import {
  Container,
  ImageIndexes,
  ImagesIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

const ImageSlider: React.FC<Props> = ({ imagesUrl }) => {
  return (
    <Container>
      <ImageIndexes>
        <ImagesIndex active={true} />
        <ImagesIndex active={false} />
        <ImagesIndex active={false} />
        <ImagesIndex active={false} />
      </ImageIndexes>
      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
};

export default ImageSlider;
