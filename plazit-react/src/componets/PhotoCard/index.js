import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { fadeIn } from "../../styles/animation";
import { useObserver } from "../../hooks/useObserver";
import { ButtonLikes } from "../ButtonLikes";
import { Link } from "@reach/router";
import PropTypes from 'prop-types';

import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const Article = styled.article`
  min-height: 300px;
`;

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;
const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const PhotoCard = ({ id = 0, liked, likes = 0, src = IMAGE }) => {
  const [show, element] = useObserver();
  

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) =>{ 
                const handleButtonLikes = () => {
                  toggleLike({variables: {
                    input: {id}
                  }})
                };
              
                return <ButtonLikes
              liked={liked}
              likes={likes}
              onClick={handleButtonLikes} />}
            }
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName, componentName){
    const propValue = props[propName]

    if (propValue === undefined){
      return new Error(`${propName} value must be defined`)
    }

    if(propValue < 0){
      return new Error(`${propName} value must be greate`)
    }
  }
}
