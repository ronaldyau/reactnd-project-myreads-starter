import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    render() {
        const bookStyle = {
            width: this.props.coverWidth,
            height: this.props.coverHeight,
            backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")"
        }
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={bookStyle}>
                        </div>
                        <BookShelfChanger 
                            book={this.props.book}
                            books={this.props.books}
                            changeShelf={this.props.changeShelf}
                        />
                    </div>
                    <div className="book-title">{ this.props.book.title}</div>
                    { 
                        this.props.book.authors && this.props.book.authors.map((author, index) => (
                           <div className="book-authors" key={index}>{author}</div>
                        ))
                    }
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