import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

export default class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  };

  onBookShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
    });
  };

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => <ListBooks books={this.state.books} onBookShelfChange={this.onBookShelfChange} />}
        />
        <Route
          exact
          path='/search'
          render={() => <SearchBooks books={this.state.books} onBookShelfChange={this.onBookShelfChange} />}
        />
      </div>
    );
  }
}
