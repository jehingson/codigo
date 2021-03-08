import React from 'react'
import { 
  Container,
  Title,
  Card,
  LocationIcon,
  PlatinumIcon,
  Reputacion,
  Caja,
  Row,
  SupporIcon,
  ClockIcon,
  Link
 } from "./styled";

export const InfoVendedor = () => {
  return (
    <Container>
      <Title>
        Información del Vendedor
      </Title>
     <Card>
       <LocationIcon /> 
       <div>
         <p>Ubicación</p>
         <strong>Teusequillo Bogotá D.C.</strong>
       </div>
      </Card> 

      <Card>
       <PlatinumIcon /> 
       <div>
         <p className="platinum">MercadoLíder Platinum</p>
         <strong>¡Es uno de los mejores del sitio!</strong>
       </div>
      </Card> 
     <Reputacion>
       <Caja>
         <li />
         <li />
         <li />
         <li />
         <li className="active" />
       </Caja>
     </Reputacion> 
     <Row>
       <div>
         <strong>9452</strong>
         <span>Ventas en los últimos 60 días</span>
       </div>
       <div>
         <strong>
           <SupporIcon/>
         </strong>
         <span>Brinda buena atención</span>
       </div>
       <div>
         <strong>
           <ClockIcon />
         </strong>
         <span>Entrega sus productos a tiempo</span>
       </div>
     </Row>

     <Link href="#">Ver más datos de este vendedor</Link>
    </Container>
  )
}
