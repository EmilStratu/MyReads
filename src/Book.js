import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {
  const { book, shelf } = props;

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <BookShelfChanger shelf={shelf} />
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>
        {book.authors.map((author) => (
          <div key={author}>{author}</div>
        ))}
      </div>
    </div>
  );
};

export default Book;
