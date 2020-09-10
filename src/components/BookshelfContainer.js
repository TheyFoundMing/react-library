import React from "react";

import BookForm from "./BookForm";
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
    this.addBook = this.addBook.bind(this);
  }

  toggleFinish(id) {
    console.log(`I'm looking for book ${id}!`);

    this.setState((prevState) => {
      const updatedBooks = prevState.books.map((book) => {
        if (book.id === id) {
          console.log(book);
          return {
            ...book,
            finished: !book.finished,
          };
        }
        return book;
      });
      return {
        books: updatedBooks,
      };
    });
  }

  addBook(newBook) {
    let prevList = this.state.books.slice(0, this.state.books.length);
    prevList.push(newBook);
    this.setState((prevState) => {
      return {
        books: prevList,
      };
    });
  }

  render() {
    return (
      <div className="library">
        <BookForm addBook={this.addBook} />
        <Bookshelf data={this.state.books} toggleFinish={this.toggleFinish} />
      </div>
    );
  }
}

export default BookshelfCont;
