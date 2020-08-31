import React from "react";
import bookList from "../booksData";

import Book from "./Book";

class BookshelfCont extends React.Component {
  render() {
    console.log(bookList);
    const books = bookList.map((book) => <Book key={book.id} data={book} />);

    return <div>{books}</div>;
  }
}

export default BookshelfCont;
