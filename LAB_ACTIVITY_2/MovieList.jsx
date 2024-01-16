import React, { Component } from 'react';
import './List.css';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        <h2>Movie List</h2>
        <ul>
          <li> Saltburn </li>
          <li> Rewind</li>
          <li> The Hows of Us</li>
        </ul>
      </div>
    );
  }
}

export default MovieList;
