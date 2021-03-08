import React from "react";
import { Helmet } from "react-helmet";
import styled from 'styled-components';

export const Div = styled.div`
    margin-top: -10px;
    padding-bottom: 16px; 
`
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #222;
    padding-bottom: 8px;
`
export const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: #333;
    padding-bottom: 8px;
` 

export const Layout = ({ children, title, subtitle }) => {
    return(
  <>
    <Helmet>
      {title && <title>{title} | ZoeGram</title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
    <Div>
    {title && <Title>{title}</Title>}
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
    </Div>
  </>
  );
};
