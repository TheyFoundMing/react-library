import React from "react";

import Book from "./Book";

import "../App.css";

class Bookshelf extends React.Component {
  render() {
    const books = this.props.data.map((book) => (
      <Book key={book.id} data={book} toggleFinish={this.props.toggleFinish} />
    ));

    return <div className="shelf">{books}</div>;
  }
}

export default Bookshelf;
