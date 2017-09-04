import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
    
    render() {
        const availableShelves = [
            {value:'currentlyReading', name: 'Currently Reading'},
            {value:'wantToRead', name: 'Want to Read'},
            {value:'read', name: 'Read'}
        ]

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}
                defaultValue={this.props.book.shelf}>
                <option value="none" disabled>Move to...</option>
                {availableShelves.map((shelf) => (
                    <option value={shelf.value} key={shelf.value}>{shelf.name}</option>
                ))}
                <option value="none">None</option>
                </select>
            </div>
        )
    }
}

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
}

export default BookShelfChanger

