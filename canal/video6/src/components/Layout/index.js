import React from "react";
import { Hero } from "../Hero";
import { Producto } from "../Producto";
import { 
  Container,
  Wrapper
 } from "./styles";

export const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <Hero />
        <Producto />
      </Wrapper>
    </Container>
  );
};
