import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book";

class BookList extends Component{

  state = {
    bookList: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then( data => {
      this.setState({
        bookList: data
      })
    })
  }


  // don't actually need this since there is no comment key in the database.  MOving comments to a state in the component

  // submitCommentHandler = (bookObj, comment) => {
  //   console.log(bookObj)
  //   const updatedList = this.state.bookList.map(book => {
  //     if (book.id === bookObj.id){
  //       book.comments.push(comment)
  //     }
  //       return book
  //   })
  //   this.setState ({
  //     bookList: updatedList
  //   })
  // }

  addBook = (newBook) =>{
    this.setState({
      bookList: [...this.state.bookList, newBook]
    })
  }

  render(){
    const bookComponents = this.state.bookList.map(book => <Book book={book} key={book.title} clickHandler={this.props.addBookToShelf}/>)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.addBook}/>
        <ul>{bookComponents}</ul>
      </div>
    );
  }
  
}

export default BookList;
