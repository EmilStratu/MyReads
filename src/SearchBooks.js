import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

export default class SearchBooks extends React.Component {
  state = {
    searchTerm: '',
    books: [],
  };

  updateSearchTerm = (searchTerm) => {
    this.setState(
      () => ({ searchTerm: searchTerm.trim() }),
      () => {
        BooksAPI.search(this.state.searchTerm).then((books) => {
          const searchedBooks = books && Array.isArray(books) ? books : [];
          this.setState(() => ({
            books: searchedBooks,
          }));
        });
      }
    );
  };

  getShelf = (bookId) => {
    const { books } = this.props;
    const matchedBooks = books.filter((book) => book.id === bookId);
    if (matchedBooks.length) {
      return matchedBooks[0].shelf;
    }

    return 'none';
  };

  render() {
    const { onBookShelfChange } = this.props;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={(e) => this.updateSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book book={book} shelf={this.getShelf(book.id)} onBookShelfChange={onBookShelfChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
