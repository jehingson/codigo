import React, { useContext } from "react";
import { Context } from "../context/Context";
import { SubmitButton } from '../componets/SubmitButton';

export const Usuario = () => {
	const { removeAuth } = useContext(Context);

  return <>
		<h1>User</h1>
		<SubmitButton onClick={removeAuth} > Cerrar sesión </SubmitButton>	
		</>;
};
