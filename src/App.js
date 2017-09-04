import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = { 
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then(response => {
      updatedBook.shelf = shelf
      let updatedBooks = this.state.books.filter(book => book.id !== updatedBook.id)
      updatedBooks.push(updatedBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <SearchBooks books={this.state.books}
              closeSearch={this.closeSearch}
              changeShelf={this.changeShelf}
            />
          )} 
        />
        <Route exact path="/" render={() => (
            <ListBooks books={this.state.books}
              changeShelf={this.changeShelf} 
              openSearch={this.openSearch} 
            />
          )} 
        />        
      </div>
    )
  }
}

export default BooksApp
