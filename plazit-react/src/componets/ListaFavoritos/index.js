import React from 'react'
import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import  PropTypes  from 'prop-types';

const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after{
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
const Grid = styled.div`
  padding-top: 32px;
`
const Imges = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
export const ListaFavoritos = ( { favs=[] } ) => {
return (
  <Grid>
    {
      favs.map( fav => <Link key={fav.id} to={`/detail/${fav.id}`} >
        <Imges key={fav.id} src={fav.src} />
      </Link> )
    }
  </Grid>
)
}

ListaFavoritos.propTypes = {
  favs : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
