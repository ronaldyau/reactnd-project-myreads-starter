import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    searchQuery: '',
    foundBooks: []
  }

  searchBooks = (event) => {
    const searchQuery = event.target.value.trim()
    this.setState({ searchQuery: searchQuery })

    if (searchQuery) {
      BooksAPI.search(searchQuery, 25).then((books) => {
        this.setState({foundBooks: books})
      })
    } else this.setState({foundBooks: []})
  }

  render() {
    console.log(this.state.foundBooks)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
              placeholder="Search by title or author"
              value={this.state.searchQuery}
              onChange={this.searchBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"> 
            {this.state.foundBooks.map((book) => (
              <Book
                book={book}
                books={this.props.books}
                key={book.id}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
    changeShelf: PropTypes.func.isRequired
}

export default SearchBooks