import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
  const { books } = props;

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
            books={books.filter((book) => book.shelf === 'currentlyReading')}
          />
          <Bookshelf
            name='Want to Read'
            shelf='wantToRead'
            books={books.filter((book) => book.shelf === 'wantToRead')}
          />
          <Bookshelf name='Read' shelf='read' books={books.filter((book) => book.shelf === 'read')} />
        </div>
      </div>
      <Link to='/search-books' className='open-search'>
        <button>Add a book</button>
      </Link>
    </div>
  );
};

export default ListBooks;
