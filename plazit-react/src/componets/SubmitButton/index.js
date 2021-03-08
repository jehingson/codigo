import React from 'react'
import styled  from 'styled-components';
import  PropTypes from 'prop-types';

const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  border: none;
  height: 32px;
  width: 100%;
  text-align: center;
  color: white;
  &[disabled]{
    opacity: .3;
  }
  ` 

export const SubmitButton = ({ children, onClick, disabled }) => {
  
    return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

SubmitButton.prototype = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}