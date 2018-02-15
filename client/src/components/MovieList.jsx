import React from 'react':
import MovieTitle from './MovieTitle.jsx';

const MovieList = (props) => (
  <div>
    <h4>Movie List Component</h4>
    There are {props.movies.length} movies.
    {props.items.map(item => <MovieList item={item}/>)}
  </div>
)

export default MovieList;
