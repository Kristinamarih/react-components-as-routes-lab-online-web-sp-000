import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>'Movies Page'</h1>
        {movies.map(movie => (
          <div key={movie.title}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <p>Genres: {movie.genres.map(genre => <ul key={genre}>{genre}</ul>)}</p>
          </div>
        ))}
    </div>
  );
};

export default Movies;
