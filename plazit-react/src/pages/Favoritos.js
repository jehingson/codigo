import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from '../componets/Layout';

export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus gustos favoritos'>
      <h1> Favoritos </h1>
      <FavsWithQuery />
    </Layout>
  );
};
