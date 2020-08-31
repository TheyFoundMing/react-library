import React from "react";

import Header from "./components/HeaderComponent";
import Bookshelf from "./components/BookshelfContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Bookshelf />
      </div>
    );
  }
}

export default App;
