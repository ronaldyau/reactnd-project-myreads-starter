import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render() {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                            width: 128, 
                            height: 188, 
                            backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` 
                        }}>
                    </div>
                    <BookShelfChanger 
                        book={this.props.book}
                        books={this.props.books}
                        changeShelf={this.props.changeShelf}
                    />
                </div>
                <div className="book-title">{ this.props.book.title }</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        </li>
    )
  }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book