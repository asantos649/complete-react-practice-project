import React from "react";

class Form extends React.Component{

  state = {
    title: '',
    author: '',
    img: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addBook(this.state)
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Add a New Book:</label><br></br>
        <input name='title' placeholder ='Title' type='text' value={this.state.title} onChange={this.changeHandler}></input>
        <input name='author' placeholder ='Author' type='text' value={this.state.author} onChange={this.changeHandler}></input>
        <input name='img' placeholder ='Image URL' type='text' value={this.state.img} onChange={this.changeHandler}></input>
        <button>Submit</button>
      </form>
    )
  }


}

export default Form;
