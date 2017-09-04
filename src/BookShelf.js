import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const books = this.props.books.filter((book) => book.shelf === this.props.shelf)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
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
        </div>
    )
  }
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookShelf