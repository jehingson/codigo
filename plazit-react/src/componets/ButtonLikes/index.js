import React from "react";
import styled  from 'styled-components';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from 'prop-types';

const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: 0;

  & svg {
    margin-right: 4px;
  }
`;

export const ButtonLikes = ({liked, likes, onClick}) => {

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return <Button onClick={onClick}>
          <Icon size="30px" /> {likes} Likes!
         </Button>;
};

ButtonLikes.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}