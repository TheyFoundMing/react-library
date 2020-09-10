import React from "react";

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      pages: "",
      finished: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  createBook() {
    this.props.addBook({
      id: this.createID(),
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      finished: this.state.finished,
    });

    this.clearForm();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  createID() {
    return this.state.title.split(" ").join("");
  }

  clearForm() {
    this.setState({
      title: "",
      author: "",
      pages: "",
      finished: false,
    });
  }

  render() {
    return (
      <div className="book-form">
        <div className="form-group">
          <label>
            Title
            <input
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Author
            <input
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Pages
            <input
              type="number"
              name="pages"
              value={this.state.pages}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          Finished?
          <label>
            <input
              type="radio"
              name="finished"
              value={true}
              onChange={this.handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="finished"
              value={false}
              onChange={this.handleChange}
            />
            No
          </label>
        </div>

        <button onClick={() => this.createBook()}>Submit</button>
      </div>
    );
  }
}

export default BookForm;
