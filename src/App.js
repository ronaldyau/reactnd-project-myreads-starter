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

  changeShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(res => {
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
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
