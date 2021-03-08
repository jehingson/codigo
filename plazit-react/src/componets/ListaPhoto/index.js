import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListaPhotoComponent = ({data: {photos = []}} = {}) => {
  return (
    <ul>
      {photos.map((photos) => (
        <li key={photos.id}>
          <PhotoCard {...photos} />
        </li>
      ))}
    </ul>
  );
};

