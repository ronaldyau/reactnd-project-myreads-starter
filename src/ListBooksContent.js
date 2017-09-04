
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooksContent extends Component {
  render() {
    return (
        <div className="list-books-content">
            <div>
                <BookShelf title='Currently Reading' shelf='currentlyReading' books={this.props.books} changeShelf={this.props.changeShelf} />
                <BookShelf title='Want to Read' shelf='wantToRead' books={this.props.books} changeShelf={this.props.changeShelf} />
                <BookShelf title='Read' shelf='read' books={this.props.books} changeShelf={this.props.changeShelf} />
            </div>
        </div>
    )
  }
}

ListBooksContent.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default ListBooksContent

