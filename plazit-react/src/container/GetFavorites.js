import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { ListaFavoritos } from "../componets/ListaFavoritos"

const GET_FAVS = gql`
  query getfavs {
    favs {
      id,
      categoryId,
      src,
      likes,
      userId
    }
  }
`;

const renderProp = ({loading, error, data}) => {
	if(loading)  return <p>Loading...</p>
	if(error)  return <p>Error!</p>
	console.log(data)
	const {favs} = data 
	return  <ListaFavoritos favs={favs} /> 
} 

export const FavsWithQuery = () => (
	<Query query={GET_FAVS} fetchPolicy='network-only' >
		{renderProp}
	</Query>

)