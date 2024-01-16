import React from 'react';
import './List.css';
import harryPotahImage from './harryPotah.png';
import twilightImage from './twilight.png';
import hungerGameImage from './hungerGame.png';

const BookList = () => {
  const books = [
    { title: 'Harry Potter and The Prisoner of Azkaban', image: harryPotahImage },
    { title: 'Twilight: Breaking Dawn', image: twilightImage },
    { title: 'The Hunger Games', image: hungerGameImage },
  ];

  return (
    <div className="book-list">
      <h2>Favorite Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
