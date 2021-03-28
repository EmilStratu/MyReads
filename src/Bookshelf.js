import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
  const { name, shelf, books, onBookShelfChange } = props;
  const shelfBooks = books.filter((book) => book.shelf === shelf);

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {shelfBooks.map((book) => (
            <li key={book.id}>
              <Book book={book} shelf={shelf} onBookShelfChange={onBookShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
