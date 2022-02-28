import React from "react";

import { Container } from "./styles";

interface Props {
  active?: boolean;
}

const Bullet: React.FC<Props> = ({ active = false }) => {
  return <Container active={active} />;
};

export default Bullet;
