import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
  const { books, onBookShelfChange } = props;

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <Bookshelf
            name='Currently Reading'
            shelf='currentlyReading'
            books={books}
            onBookShelfChange={onBookShelfChange}
          />
          <Bookshelf name='Want to Read' shelf='wantToRead' books={books} onBookShelfChange={onBookShelfChange} />
          <Bookshelf name='Read' shelf='read' books={books} onBookShelfChange={onBookShelfChange} />
        </div>
      </div>
      <Link to='/search-books' className='open-search'>
        <button>Add a book</button>
      </Link>
    </div>
  );
};

export default ListBooks;
