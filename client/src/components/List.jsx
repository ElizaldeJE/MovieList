import React from 'react';
import MovieTitle from './ListItem.jsx';

const MovieList = (props) => (<div classN='movies'>
  {console.log(props.list);}

    { props.list.map((item, i) => <MovieTitle item={item} key={i}/>)}
  </div>);

export default MovieList;
