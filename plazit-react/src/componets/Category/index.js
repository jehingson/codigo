import React from 'react'
import styled from 'styled-components';
import { Link as LinkRouter} from "@reach/router";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'


const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    border-radius: 50%;
    height: 75px;
    overflow: hidden;
    object-fit: 'cover';
`

export const Category = ({path = '#', cover, emoji}) => {
    
    return(
    <Link to={path}>
        <Image src={cover} />
        {emoji}
    </Link>
)}


