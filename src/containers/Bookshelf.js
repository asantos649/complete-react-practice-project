import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component{

  state = {
    search: ''
    // booksToShow: this.props.booksForShelf 
  }


  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // clickHandler = (e) => {
  //   const updatedBookList = this.state.booksToShow.filter(book => book.title.toUpperCase().startsWith(e.target.value))
  // }

  render(){
  const filteredList = this.state.search !== '' ? this.props.booksForShelf.filter(book => book.title.toUpperCase().startsWith(this.state.search.toUpperCase())) : this.props.booksForShelf
  const bookComponents = filteredList.map(book => <Book book={book} key={`shelf-${book.id}`} clickHandler={this.props.removeBookFromShelf}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <input name='search' placeholder='search for title' value={this.state.search} type='text' onChange={this.changeHandler}></input>
      <ul>{bookComponents}</ul>
    </div>
  );
  }
  
};

export default Bookshelf;
