import React from "react";

import "../App.css";

function Book(props) {
  console.log(props);
  return (
    <div className="cover" onClick={() => props.toggleFinish(props.data.id)}>
      <h2>{props.data.name}</h2>
      <div className="details">
        <span>{props.data.pages} pages</span>
        <span>{props.data.finished ? "Finished" : "Not finished"}</span>
      </div>
      <h4>{props.data.author}</h4>
    </div>
  );
}

export default Book;
