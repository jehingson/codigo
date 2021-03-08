import styled from "styled-components";
import { IoIosSearch } from 'react-icons/io';
import { GrDeliver, GrLocation } from 'react-icons/gr';
import {FiShoppingCart} from 'react-icons/fi';


export const Container = styled.header`
width: 100vw;
background-color: var(--yellow);
height: 100px;
`
export const Wrapper = styled.nav`
max-width: 1200px;
padding: 8px 8px;
margin: 0 auto;
height: 91px;
img{
  width: 134px;
  height: 33px;
}
`
export const Column = styled.div`
display: flex;
flex-direction: column;

`

export const RowTop = styled.div`
display: grid;
grid-template-columns: .5fr 2fr .9fr;
align-items: center;


`

export const DivInput = styled.div`
width: 598px;
height: 38px;
background-color: white;
display: flex;
align-items: center;
padding: 7px 0 9px 15px;
box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
border-right: 2px;
`

export const Input = styled.input`
flex: .93;
border: none;
outline:0;
border-right: 1px solid #ccc;
font-size: 16px;
font-weight: 100;
color: #333;
&::placeholder { 
  color: #000; 
  opacity: .5;
  }
`

export const IconBuscar  = styled(IoIosSearch)`
flex: .07;
font-size: 20px;
color: #666;
;`

export const DivEnvio = styled.div`
display:flex;
width: 100%;
font-size: 18px;
justify-content: flex-end;
align-items: center;
p{
  color: #000;
  opacity: .8;
  padding-left: 10px;
}

`
export const IconEnvio = styled(GrDeliver)`
 color: #000;
  opacity: .7;
`
export const RowBottom = styled.div`
padding-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
div{
  display: flex;
  align-items: center;
}
`
export const Locations = styled.div`
display: flex;
width: 100px;
align-items: center;
padding: 0 2px 0 0;
border-radius: 3px;
border: 1px solid transparent;
cursor: pointer;
p{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 3px;
  span{
    color: rgba(0,0,0,.8);
  }
}
&:hover{
  border: 1px solid rgba(0,0,0,.1);
}
`
export const IconLocalizacion = styled(GrLocation)`
font-size: 35px;
opacity: .5;
`

export const Category = styled.div`
  margin-left: -110px;
  p{
    color: #333;
    opacity: .7;
    font-size: 13px;
    padding-right: 19px;
    cursor: pointer;
    transition: all .3 ease-in-out;
  }
  p:hover{
    opacity: .9;
  }
`

export const Login = styled.div`
p{
  font-size: 13px;
  color: #333;
  padding-right: 20px;
  cursor: pointer;
}
`

export const IonsShopping = styled(FiShoppingCart)`
cursor: pointer;`