import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    searchQuery: '',
    foundBooks: [],
    error: false
  }

  searchBooks = (event) => {
    const searchQuery = event.target.value
    this.setState({ searchQuery: searchQuery })

    if (searchQuery) {
      BooksAPI.search(searchQuery, 25).then((books) => {
        if (books.error) {
          this.setState({ foundBooks: [], error: 'There was an error searching for ' + searchQuery })
        } else if (books.length > 0) {
          this.setState({foundBooks: books, error: '' })
        } else {
          this.setState({ foundBooks: [], error: 'No books found for "' +  searchQuery + '"'})
        }
      })
    } else {
      this.setState({foundBooks: [], error: ''})
    }
  }

  render() {
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
            {this.state.foundBooks && this.state.foundBooks.map((book) => (
              <Book
                coverWidth={128}
                coverHeight={188}
                book={book}
                books={this.props.books}
                key={book.id}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>
        </div>
        { this.state.error && (
          <div>
            <h3>{this.state.error}</h3>
          </div>
        )}        
      </div>
    )
  }
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default SearchBooks