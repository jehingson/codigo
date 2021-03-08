import React from "react";
import {
Container,
Estado,
Row,
HeartIcon,
Card,
CheckIcon,
Price,
Cantidad,
Color,
ButtonCard,
Button,
Beneficios,
ShildeIcon,
CopaIcon
} from "./styles";

export const ProductoVenta = () => {
  return (
    <Container>

      <Estado> Nuevo | 4 vendidos</Estado>

      <Row>
        <h1>Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led</h1>
        <HeartIcon />
      </Row>
     <Price>
       $ 94.900
       </Price> 

      <Card>
      <CheckIcon />
      <div>
        <span className="title">Llega gratis mañana</span>
        <span className="detalle">Beneficio Mercado Puntos</span>
        <a href="#" className="more">Ver más formas de entrega</a>
      </div>   
      </Card> 

    <Color>
    Color: <strong>Negro/Rojo</strong>
    </Color>
    
    <Color>
    Color de a Luz: <strong>Rojo</strong>
    </Color>

    <Cantidad >
    <p>Cantidad</p>
    <strong>1 unidad</strong>
    <input type="number" value="" />
    <span>(7 disponibles)</span>
    </Cantidad>


    <ButtonCard>
      <Button className="solid">Comprar ahora</Button>
      <Button>Agregar al carrito</Button>
    </ButtonCard>

    <Beneficios>
      <li>
        <ShildeIcon />
        <p>Compra Protegida, <span>recibe el producto que esperabas o te devolvemos tu dinero.</span></p>
      </li>
      <li>
        <CopaIcon />
        <p>Mercado Puntos. <span>Sumas 47 puntos.</span></p>
      </li>
    </Beneficios>

    </Container>
  );
};
