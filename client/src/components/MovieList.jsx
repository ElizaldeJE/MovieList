import React from 'react':
import MovieTitle from './MovieTitle.jsx';

const MovieList = (props) =>
    (<div className='movies'>
        <h4>Movie List Component</h4>
        There are {props.movies.length} movies.
        {props.items.map((movie, i) =>
          <MovieList movie={movie} key={i}/>)}
     </div>);


export default MovieList;
