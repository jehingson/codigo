import styled from 'styled-components'
import {BsCreditCard} from 'react-icons/bs';
import {AiFillBank} from 'react-icons/ai';
import {BiMoney} from 'react-icons/bi';
import {FcPlus} from 'react-icons/fc';




export const Container = styled.div`
  background-color: #ebebeb;

  .rec.rec-slider-container{
    padding: 0!important;
    margin: 0 !important;
  }
  .rec.carousel{
  padding:0;
  width: 100vw; 
  }
  .rec.rec-arrow:disabled {
  visibility: hidden;
  opacity: 0 !important;
}
  >.div{
    
  .rec.rec-arrow{
    position: absolute;
    z-index: 100;
    width:20px !important;
    height: 70px !important;
    display: none;
    border-radius: 5px !important;
    background-color: white !important;
    color: var(--blue3) !important;
  }
  .rec.rec-arrow-left{
    left: -10px !important;
  }
  .rec.rec-arrow-right{
    width: 40px !important;
    right: -10px !important;  
  }

&:hover .rec.rec-arrow{
  display: block; 
  z-index: 100;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,.19);
}

.rec.rec-arrow:hover {
  background-color: white !important;
  color: var(--blue3) !important;
 }
  }
.rec.rec-pagination{
  opacity: 0 !important;
}
`
export const ContainerDiv = styled.div`
max-width: 1599px;
height: 340px;
margin: 0 auto;
padding:0;
outline: 0 !important;
>img{
 width: 100vw;
 height: 100%;
 object-fit: fill;
}
`
export const Wrapper  = styled.div`
max-width: 1200px;
margin: 0 auto;
`

//  COMPONENTES PAGOS 
export const IconsTarje = styled(BsCreditCard)`
color: #0000ee;
opacity: .7;
width: 30px;
height: 30px;
`
export const IconsBank = styled(AiFillBank)`
color: #0000ee;
width: 30px;
height: 30px;
opacity: .7;`

export const IconsMoney = styled(BiMoney)`
color: #0000ee;
width: 30px;
height: 30px;
opacity: .7;`

export const IconsPlus = styled(FcPlus)`
fill: #0000ee;
width: 30px;
height: 30px;
opacity: .7;`

export const Pago = styled.ul`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  height: 90px;
  padding: 20px;
  margin: 0;
  border: none;
  border-bottom: 2px solid #ddd;
  >li{
    display: flex;
    align-items: center;
    >div{
      padding-left: 20px;
      >h4{
      font-size: 16px;
     }
     p{
       padding-top: 1px;
       font-size: 12px;
       color: var(--blue3);
       cursor: pointer;
     }
    }
    
    
  }
`

// RELACIONADOS CARD
export const DiRelacionado = styled.div`
padding-top: 30px;
position: relative;
.rec.rec-arrow{
position: absolute;
z-index: 100;
background-color: white;
color: var(--blue3);
}
.rec.rec-arrow-right{
right: -12px !important;  
  }
.rec.rec-arrow-left{
  left: -16px !important;
}
`
export const Row = styled.div`
display: flex;
align-items: flex-end;
h2{
  font-size: 24px;
  color: #666;
  margin-right: 20px;
  font-weight: 400;
}
a{
text-decoration: none;
color: var(--blue3);
font-size: 12px;
}
a:hover{
  color: var(--blue1);
}
`
export const ItemCard = styled.div`
  border-bottom: 1px solid #ddd;
  width:225px;
  height: 310px;
  position: relative;
  overflow: hidden;
  margin: 15px 0px 10px 5px;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  outline: 0;
  transition: height 3ms ease-in-out;
  &:hover{
    box-shadow: -.5px 3px 3px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    border-radius: 4px;
  }
  &:hover .text h5{
    display: block
  }
  >img{
    width:225px;
    height: 220px;
    object-fit: fill;
    border-bottom: 1px solid #ddd;
  }
  >.text{
    padding: 10px 11px 11px 11px;
    >.price{
    color: #333;
    font-size:17px;
    
  }
   >.cantidad{
    margin-top: 8px;
     font-size: 12px;
     color: #666;
   }
   >.envio{ 
    margin-top: 5px;
     color: #00a650;
     font-size: 12px;
  }
  >h5{
    margin-top: 5px;
    font-size: 12px;
    color: #666;
    display: none;
  }
}
  
`
