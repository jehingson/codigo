import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import styled from "styled-components";
import { SubmitButton } from "../SubmitButton";

const Form = styled.form`
  padding: 16px 5px;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: none;
  &[disabled]{
    opacity: .3;
  }
`;

const H2 = styled.h2`
  font-size: 16px;
  font-weight: 500px;
  padding: 8px 0;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`

export const Userform = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(
			{ 
				email: email.value, 
				password: password.value 
			});
  };

  return (
    <>
     
      <Form disabled={disabled} onSubmit={handleSubmit}>
      <H2>{title}</H2>
        <Input disabled={disabled} placeholder="Email" type="email" {...email} />
        <Input disabled={disabled} placeholder="Contraseña" type="password" {...password} />
        <SubmitButton disabled={disabled} >{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
