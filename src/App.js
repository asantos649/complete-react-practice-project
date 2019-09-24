import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component{

  state = {
    booksForShelf: []
  }

  addBookToShelf = (book) => {
    if (!this.state.booksForShelf.includes(book)){
      this.setState({
        booksForShelf: [...this.state.booksForShelf, book]
      })
    }
  }

  removeBookFromShelf = (bookObj) => {
    const filteredList = this.state.booksForShelf.filter(book => book.id !== bookObj.id)
    this.setState({
      booksForShelf: filteredList
    })
  }

  render () {
    return (
      <div className="book-container">
        <BookList addBookToShelf={this.addBookToShelf}/>
        <Bookshelf booksForShelf={this.state.booksForShelf} removeBookFromShelf={this.removeBookFromShelf}/>
      </div>
    );
  }
 
}

export default App;
