import React from 'react'
import { 
  Container, 
  Wrapper, 
  RowTop,
  RowBottom, 
  Column, 
  DivInput, 
  Input,
  IconBuscar,
  Locations,
  DivEnvio,
  IconEnvio,
  IconLocalizacion,
  Category,
  Login,
  IonsShopping

} from "./styles";



export const Header = () => {

 

  return (
    <Container>
      <Wrapper>
       <Column>
       <RowTop>
       <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/logo__large_plus@2x.png" alt="logo"/>
       <DivInput>
         <Input 
          type="text"
          placeholder="Buscar productos marcas y más..."
         />
         <IconBuscar />
       </DivInput>
       <DivEnvio>
          <IconEnvio />
          <p>Te llega rápido y gratis</p>
       </DivEnvio>
       </RowTop>
       <RowBottom>
        
          <Locations>
          <IconLocalizacion />
          <p>Ingresa tu <span> ubicación </span></p>
          </Locations>
          <Category>
            <p>Categorias</p>
            <p>Historial</p>
            <p>Tiendas oficiales</p>
            <p>Ofertas de la semana</p>
            <p>Vender</p>
            <p>Ayuda/PQR</p>
          </Category>
        
        <Login>
          <p>Crea tu cuenta</p>
          <p>Ingresa</p>
          <p>Mís compras</p>
          <IonsShopping />
        </Login>
       
       </RowBottom>
       </Column> 
        
      </Wrapper>
    </Container>
  )
}
