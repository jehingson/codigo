import React, { useEffect, useState, useRef } from 'react'
import { InfoVendedor } from "../InfoVendedor";
import { ProductoVenta } from "../ProductoVenta";
import Carousel from 'react-elastic-carousel';
import {
  Container,
  Panel,
  Column,
  Galeria,
  Decription,
  Section,
  Imgs,
  ImgContainer,
  ItemCard,
  Slider
  } from "./styles";


const PRODUCTO__IMG = [
  { 
    id: 1,
    img: "https://http2.mlstatic.com/D_NQ_NP_732636-MCO43951872229_102020-O.webp"
  },
  { 
    id: 2,
    img: "https://http2.mlstatic.com/D_NQ_NP_955802-MCO43951863421_102020-O.webp"
  },
  {
    id: 3,
    img: "https://http2.mlstatic.com/D_NQ_NP_648321-MCO43951825943_102020-O.webp"
  },
  { 
    id: 4,
    img: "https://http2.mlstatic.com/D_NQ_NP_803204-MCO43951874185_102020-O.webp"
  },
  {
    id: 5,
    img: "https://http2.mlstatic.com/D_NQ_NP_781552-MCO43951859592_102020-O.webp"
  },
  {
    id: 6,
    img: "https://http2.mlstatic.com/D_NQ_NP_936324-MCO43951863422_102020-O.webp"
  },
  {
    id: 7,
    img: "https://http2.mlstatic.com/D_NQ_NP_783002-MCO43951872230_102020-O.webp"
  },
  {
    id: 8,
    img: "https://http2.mlstatic.com/D_NQ_NP_674511-MCO43951861501_102020-O.webp"
  }
]
const PRODUCTO__VENDEDOR = [
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

export const Producto = () => {
  const [imgProducto, setImgProducto] = useState([])
  const imgZoom = useRef()


  const handleMouseMove = e => {
    const {left, top, width, height} = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width*100;
    const y = (e.pageY - top) / height*100;
    imgZoom.current.style.backgroundPosition = `${x}% ${y}%`
  }

  useEffect(() => {
    setImgProducto(PRODUCTO__IMG[0].img)
  }, [])
  return (
    <Container>
      <Panel>
        <Column>
        <Galeria>
          <Imgs>
            {
             PRODUCTO__IMG.map((img) => (
               <li key={img.id} onMouseEnter={() => setImgProducto(img.img) }>
                 {
                   imgProducto === img.img ? 
                   <img src={img.img} className="blue"  alt=""/>
                   :
                   <img src={img.img}  alt=""/>
                 }
               </li>
             )) 
            }
          
          </Imgs> 
          
          <ImgContainer
            onMouseMove={handleMouseMove}
            onMouseLeave={() => imgZoom.current.style.backgroundPosition = `center`}
            onMouseLeave={() => imgZoom.current.style.backgroundPosition = `center`}
          >
          
             <img src={imgProducto} alt=""/>
             <div 
              ref={imgZoom}
              className="zoom" 
              style={{backgroundImage: `url(${imgProducto})`}}
              
              />

        
          </ImgContainer>
        </Galeria>
          <Slider>
            <h4>Más publicaciones del vendedore</h4>
        <Carousel   itemsToScroll={4} itemsToShow={4} >
            {
              PRODUCTO__VENDEDOR.map(item => (
                <ItemCard key={item.id}>
                  <img src={item.img} alt=""/>
                  <div className="text">
                  <p className="price">$ {item.price}.000</p>
                  <p className="cantidad">{item.cantidad}x{item.price}.000</p>
                  <p className="envio">{item.envio}</p>
                  <h5>{item.title}</h5>
                  </div>
                </ItemCard>
              ))
            }
        </Carousel>
        </Slider>
          <Info/> 
        </Column>
        <Column>
          <ProductoVenta />
          <InfoVendedor />
           <Garantia />
           <Garantia />
           <InfoVendedor />
           <Garantia />
        </Column>
      </Panel>
    </Container>
  )
}

const Info = ()=>{
  return(
    <Decription>
      <h4>Descripción</h4>

      <p>
        <span>DIADEMA GAMER CON LUZ LED, MICRÓFONO / PLUG 3.5MM / USB, REDRAGON THEMIS H220.</span>
        <br/><br/>
        <span>SONIDO ENVOLVENTE</span>
        <br/><br/>
        Equipado con estéreo de alto rendimiento y graves extremos inteligentes, mejora la claridad del sonido y le proporciona un campo de sonido de estudio y lo hace valioso para varios juegos.
        <br/><br/>
        <span>CHAT CLARO CRISTAL</span>
        <br/><br/>
        Las almohadillas para los oídos de alta calidad reducen el ruido de fondo. Un micrófono oculto absorbido por una fuente de sonido de 360 grados capta su voz alta y clara. Perfecto para el chat en línea y en el juego, y luego elimínelo cuando vea películas o escuche música.
        <br/><br/>
        <span>LIGERO Y CÓMODO</span>
        <br/><br/>
        Las almohadillas súper acolchadas de primera calidad y la diadema ajustable de diseño ergonómico hacen que los auriculares sean cómodos para usar durante mucho tiempo, especialmente para las personas que aman los juegos de PC. Redragon se dedica a ofrecer la mejor experiencia de juego al jugador.
        <br/><br/>
        <span>COMPATIBILIDAD VERSÁTIL</span>
        <br/><br/>
        Compatible con portátiles, PC, Play Station4 / 3, Xbox One y Nintendo Switch, portátiles, tabletas, iPad, teléfonos inteligentes. Tenga en cuenta que necesita un adaptador de Microsoft adicional (no incluido) cuando se conecta con una versión anterior del controlador Xbox One.
        <br/><br/>
        </p>
        <hr/>
        <p>
          <br/>
          <br/>
          <span>CARACTERÍSTICAS</span>
          <br/><br/>
          
•Retroiluminación LED roja <br/>
•Una reproducción de sonido de alta calidad mediante una unidad de controlador dinámico de 50 mm <br/>
•Los pines chapados en oro de 3,5 mm x 2 proporcionan un excelente rendimiento de sonido <br/>
•Cable divisor de conector 2 a 1 de 3,5 mm incluido para compatibilidad multiplataforma <br/>
•Ajuste de volumen integrado y diseño de interruptor de micrófono <br/>
•Diseño de tamaño elástico frontal de 15 secciones para un uso cómodo <br/>
<br/>
        </p>
        <hr/>
        <p>
          <br/>
          <br/>
          <span>ESPECIFICACIONES</span>
          <br/>
          <br/>

          •Tipo de enchufe: USB + 3,5 mm x 2 (3 enchufes deben estar todos conectados) <br/>
•Diámetro del altavoz: 50MM  <br/>
•Sensibilidad: -38 ± 2dB (0dB = 1V / PA) <br/>
•Respuesta frecuente: 20 ~ 20000 Hz <br/> 
•Impedancia: 16 Ohm ± 15% <br/>
•Dimensiones del micrófono: 60 * 2.7 mm <br/>
•Paquete incluido: 1 x Auriculares Redragon H220 / 2 cables de 3,5 mm (micrófono / audio) + cable USB / 1 x manual de usuario <br/>

        </p>
    </Decription>
  )
}

const Garantia = () =>{
  return(
   <Section>
     <h5>Garantía</h5>
     <div>
       <span>
         <p className="title">Compra Protegida con Mercado Pago</p>
         <p className="description">Recibe el producto que esperabas o te devolvemos tu dinero</p>
       </span>
       <span>
         <p className="title">Garantía del vendedor</p>
         <p className="description">Garantía del vendedor: 6 meses</p>
       </span>
       <a href="#">Conocer más sobre garantía</a>
     </div>
   </Section> 
  )
}
