import React from 'react';
import './List.css';

const BookList = () => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        <li>Harry Potter and The Prisoner of Azkaban</li>
        <li>Twilight: The Breaking Dawn </li>
        <li> The Hunger Games: Mockingjay</li>
      </ul>
    </div>
  );
};

export default BookList;
