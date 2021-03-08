import React, {useState, useEffect} from "react";
import { Category } from "../Category";
import styled, {css} from "styled-components";

const List = styled.ul`
  display: flex;
  overflow: scroll;
	width: 100%;
	${props => props.fixed && css`
		background: #fff;
		border-radius: 60px;
		box-shadow: 0 0 20px rgba(0,0,0,0,0.3);
		left: 0;
		margin: 0 auto;
		max-width: 500px;
		padding: 5px;
		position: fixed;
		right: 0;
		top: -20px;
		transform: scale(.5);
		z-index: 1;
	`}

  ::-webkit-scrollbar {
		-webkit-appearance:slider-horizontal;
	}
	::-webkit-scrollbar:vertical{
		display:none;
	}
	::-webkit-scrollbar-thumb {
	display: none;
}
}
}
`;
const Item = styled.li`
  padding: 0 8px;
  list-style: none;
`;

function useCategoriasData(){
	const [categorias, setCategorias] = useState([])
	const [loading, setLoading] = useState(false)


	useEffect(function(){

		setLoading(true)
		window.fetch('https://petgram-server-jehingson-k3bshpn7v.vercel.app/categories')
			.then(res => res.json())
			.then(response => {
				setCategorias(response)
				setLoading(false)
			})
	}, [])

	return {categorias, loading}
}

 const ListaCategoryComponet = () => {
	const {categorias, loading} = useCategoriasData();
	const [showFixed, setShowFixed] = useState(false)

	
	useEffect(function(){
		const onScroll = e => {
			const newShowFixed = window.scrollY > 200
			showFixed !== newShowFixed && setShowFixed(newShowFixed)
		}
		document.addEventListener('scroll', onScroll)

		return () => document.removeEventListener('scroll', onScroll)
	},[showFixed])

	
	const renderList = (fixed) => (
		<List fixed = {fixed}>
			{	loading ?
				<Item key={loading}>
          	<Category />
      	</Item>
			:
			categorias.map((category) => (
        <Item key={category.id}>
          	<Category {...category} path={`/zoe/${category.id}`} />
      	</Item>
      ))}
    </List>
	)
 
  return (
		<>
		{renderList()}
		{showFixed && renderList(true)}
		</>
  );
};

export const ListaCategory = React.memo(ListaCategoryComponet)