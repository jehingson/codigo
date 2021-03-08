import React from "react";
import { ListaCategory } from '../componets/ListaCategory';
import { ListOfPhotoCard } from "../container/ListOfPhotoCard";
import { Layout } from '../componets/Layout';

const HomePage = ({id}) => {
  return (
    <Layout title='Tu app de la moda' subtitle='Con ZoeGram puedes encontrar la colecciones mas linda de la marca zoe company'  >
      <ListaCategory />
      <ListOfPhotoCard categoryId={id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
