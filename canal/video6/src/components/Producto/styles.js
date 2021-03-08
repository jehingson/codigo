import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 12px;
`
export const Panel = styled.div`
background-color: var(--white);
box-shadow:  var(--panel);
display: grid;
grid-template-columns: 67fr 33fr;

.rec.rec-arrow{
  color: var(--blue3) !important;
}
.rec.rec-arrow:hover {
  background-color: white !important;
  color: var(--blue3) !important;
 }
.rec.rec-arrow:disabled {
  visibility: hidden;
  opacity: 0 !important;
}
.rec.rec-pagination{
  opacity: 0 !important;
}
`

export const Column = styled.div``

export const Galeria = styled.div`
margin-top: 16px;
display: flex;
justify-content: space-around;
height: 530px;


`
export const Decription = styled.div`
  border-top: 1px solid var(--border);
  width: 88%;
  margin:0 auto;
  padding: 40px 0;
  >h4{
    color: var(--text1);
    font-size: 24px;
    margin-bottom: 32px;
    line-height: 30px;
  }
  >p{
    line-height: 27px;
    font-size: 20px;
    color: var(--text3);
  }
  >hr{
    border-top: 1px solid var(--text2);
  }
`
export const Section = styled.div`
  padding: 32px 16px;
  margin: 0 16px;
  border: 1px solid var(--border);
  border-bottom: none;
  >h5{
    font-size: 18px;
    margin-bottom: 28px;
    color: var(--text1);
    line-height: 22.5px;
  }
  >div{
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

    >span{
     margin-bottom: 24px;
    }
    .title{
      font-size: 16px;
      color: var(--text1);
      line-height: 21.6px;
      margin-bottom: 12px;
    }
    .description{
      font-size: 14px;
      color: var(--text2);
    }
    >a{
      font-size: 14px;
      color: var(--blue3);
      text-decoration: none;
    }
  }
`

export const Imgs = styled.ul`
position: relative;
list-style: none;
top: 0;
display: flex;
flex-direction: column;
width:100%;
margin: 0 auto;
flex: .1;
  li{
    position:relative;
    width: 49px;
    height: 49px;
    margin-bottom: 12px;
    margin-left: 16px;
    cursor: pointer;
    img{
      width: 49px;
      height: 49px;
      border: 1px solid rgba(0,0,0,.3); 
      border-radius: 5px;
      }
    .blue{
      border: 2px solid var(--blue3); 
      }
    }
`
export const ImgContainer = styled.div`
  flex: .9;
  display: flex;
  justify-content: center;
  position: relative;
  >img{
  padding-top: 30px;
  object-fit: contain;
  height: 100%;
  }
  >.zoom{
    display: none;
  }
  &:hover{
    cursor: zoom-in;
    
    >.zoom{
      display: block;
      position: absolute;
      height: 100px;
      width: 350px;
      height: 416px;
      right: -52%;
      background-position: center;
      background-size: 210%;
      background-repeat: no-repeat;
    }
  }
`
export const Slider = styled.div`

h4{
  margin: 30px 52px 10px 52px;
  padding-top: 40px;
  padding-bottom: 20px;
  border-top: 1px solid #ddd;
  font-size: 24px;
  color: #595959;
  font-weight: 100;
}
`
export const ItemCard = styled.div`
  border-bottom: 1px solid #ddd;
  width:166px;
  height: 275px;
  position: relative;
  overflow: hidden;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 15px;
  outline: 0;
  
  &:hover{
    box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
  }
  >img{
    width: 166px;
    height: 166px;
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
  }
}
  
`
