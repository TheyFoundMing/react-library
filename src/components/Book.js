import React from "react";

function Book(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.data.name}</h2>
      <h4>{props.data.author}</h4>
    </div>
  );
}

export default Book;
