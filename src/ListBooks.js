import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListBooksContent from './ListBooksContent'
import OpenSearch from './OpenSearch'

class ListBooks extends Component {
  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <ListBooksContent books={this.props.books} 
                changeShelf={this.props.changeShelf} />
            <OpenSearch />
        </div>
    )
  }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default ListBooks