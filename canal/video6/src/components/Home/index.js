import React from 'react'
import { 
  Container, 
  Wrapper, 
  ContainerDiv, 
  IconsTarje, 
  Pago,
  IconsBank,
  IconsMoney,
  IconsPlus,
  DiRelacionado,
  Row,
  ItemCard
 } from "./styles";
import Carousel from 'react-elastic-carousel'


const RELACIONADOS = [
  { 
    id: 1,
    img: "https://http2.mlstatic.com/D_NQ_NP_732636-MCO43951872229_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  },
  { 
    id: 2,
    img: "https://http2.mlstatic.com/D_NQ_NP_955802-MCO43951863421_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  },
  {
    id: 3,
    img: "https://http2.mlstatic.com/D_NQ_NP_648321-MCO43951825943_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  },
  { 
    id: 4,
    img: "https://http2.mlstatic.com/D_NQ_NP_803204-MCO43951874185_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  },
  {
    id: 5,
    img: "https://http2.mlstatic.com/D_NQ_NP_781552-MCO43951859592_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  },
  {
    id: 6,
    img: "https://http2.mlstatic.com/D_NQ_NP_936324-MCO43951863422_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  },
  {
    id: 7,
    img: "https://http2.mlstatic.com/D_NQ_NP_783002-MCO43951872230_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  },
  {
    id: 8,
    img: "https://http2.mlstatic.com/D_NQ_NP_674511-MCO43951861501_102020-O.webp",
    price: 23,
    cantidad: 20,
    envio: "envio gratis",
    title: "Diadema Gamer Redragon H220 Themis, Micrófono Plug 3.5mm Led"
  }
]

const HomePortada = [
  { 
    id: 1,
    img: "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-d5fa4abb-9687-41af-aadf-3f0b998e77a3.jpg"
    
  },
  { 
    id: 2,
    img: "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-b62400f8-4ab0-4059-9180-efa491eff4e4.jpg"
  },
  { 
    id: 3,
    img: "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-1f5e5cfd-382a-44f8-967d-f8cc757a4de3.jpg"
  },
  { 
    id: 4,
    img: "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-mobile-big-banner-picture-9f871e12-abf9-41bc-b52f-11d44c12541e.jpg"
  },
  { 
    id: 5,
    img: "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-54ce5288-5b60-4cd4-9650-333de5a2aa9c.jpg"
  }
  
]

const Relacionados = (title, vector) => { return (
  <DiRelacionado>
    <Row>
      <h2>{title}</h2>
      <p><a href="#">Ver historial</a></p>
    </Row>
    {
      <Carousel itemsToScroll={5} itemsToShow={5}>
      {
        vector.map(item => (
          <ItemCard key={item.id}>
          <img src={item.img} alt=""/>
          <div className="text">
          <p className="price">$ {item.price}.000</p>
          <h5>{item.title}</h5>
          </div>
        </ItemCard>
        ))
      }
  </Carousel>
    }
  </DiRelacionado>
)}

export const Home = () => {
  return (
    <Container>
      <div className="div">
      <Carousel enableAutoPlay autoPlaySpeed={1500}>
          {
            HomePortada.map(item => (
              <ContainerDiv key={item.id}>
                <img src={item.img} alt=""/>
              </ContainerDiv>
            ))
          }
      </Carousel>
      </div>
      

     <Wrapper>
     <Pagos />

     {Relacionados("Basado en tu última visita", RELACIONADOS)}
     {Relacionados("Relacionado con tus visitas en Computación", RELACIONADOS)}
     {Relacionados("También puede interesarte", RELACIONADOS)}
      </Wrapper>
    </Container>
  )
}


const Pagos = () => {
  return (
    <Pago> 
        <li>
        <IconsTarje />
        <div>
        <h4>Hasta 48 cuotas</h4>
        <p><a href="#"></a>Ver más</p>
        </div>
        </li>

        <li>
        <IconsBank />
        <div>
        <h4>Transferencia desde tu banco</h4>
        <p><a href="#"></a>Ver más</p>
        </div>
        </li>

        <li>
        <IconsMoney />
        <div>
        <h4>Paga en efectivo</h4>
        <p><a href="#"></a>Ver más</p>
        </div>
        </li>

        <li>
        <IconsPlus />
        <div>
        <h4>Más medios de pago</h4>
        <p><a href="#"></a>Ver todos</p>
        </div>
        </li>
    </Pago>
  )
}