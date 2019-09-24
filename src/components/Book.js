import React from "react";

class Book extends React.Component{

  state ={
    showComment: false,
    showCommentForm: false,
    currentComment: '',
    comments: []
  }

  showCommentsHandler = () =>{
    this.setState({
      showComment: !this.state.showComment
    })
  }

  showCommentsFormHandler = () =>{
    this.setState({
      showCommentForm: !this.state.showCommentForm
    })
  }

  submitCommentHandler = (e) => {
    e.preventDefault()
    this.setState({
      showCommentForm: !this.state.showCommentForm,
      showComment: true,
      comments: [...this.state.comments, e.target.currentComment.value],
      currentComment: ''
    })

  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  render(){
    const commentsForm = <form onSubmit={this.submitCommentHandler}>
        <input type='text' name='currentComment' value={this.state.currentComment} onChange={this.changeHandler}></input>
        <button>submit</button>
      </form>

    return (
      <div>
        <br></br>
        <h2>{this.props.book.title}</h2>
        <img src= {this.props.book.img} alt={this.props.book.title} onClick={() => this.props.clickHandler(this.props.book)}></img>
        <br></br>
        <button onClick={this.showCommentsFormHandler}>Add Comment</button>
        {this.state.showCommentForm ? commentsForm : null}
        <button onClick={this.showCommentsHandler}>See Comments</button>
        {this.state.showComment ? <div>{this.state.comments.join("; ")}<br></br></div> : null}
      </div>
    );
  }
  
};

export default Book;
