import React from "react";

import Bookshelf from "./Bookshelf";
import bookList from "../booksData";

import "../App.css";

class BookshelfCont extends React.Component {
  constructor() {
    super();
    this.state = {
      books: bookList,
    };

    this.toggleFinish = this.toggleFinish.bind(this);
  }

  toggleFinish(id) {
    console.log(`I'm looking for book ${id}!`);
  }

  render() {
    return (
      <Bookshelf data={this.state.books} toggleFinish={this.toggleFinish} />
    );
  }
}

export default BookshelfCont;
