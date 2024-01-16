import React from 'react';
import './List.css';
import howsofusImage from './howsofus.png';
import RewindImage from './Rewind.png';
import SaltburnImage from './Saltburn.png';

const MovieList = () => {
  const movies = [
    { title: 'The Hows of Us', image: howsofusImage },
    { title: 'Rewind', image: RewindImage },
    { title: 'Saltburn', image: SaltburnImage },
  ];

  return (
    <div className="movie-list">
      <h2>Favorite Movie</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
