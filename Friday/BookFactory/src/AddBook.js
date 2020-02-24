import React, { useState, useEffect } from "react";

export default function AddBook(props) {
  const bookFacade = props.bookFactory;
  //creates book cause' only books exists in bookfactory
  const [book, setBook] = useState([props.newBook]);
  //uses this to clear after adding a book
  const initialState = { title: "", info: "" };
  const newBook = bookFacade.newBook;
  //addbook method from bookfactory
  const { addBook } = bookFacade;

  const handleChange = evt => {
    const target = evt.target;
    const id = target.id;
    const value = target.value;
    setBook({ ...book, [id]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addBook(book);
    setBook({ ...initialState });
  };

  useEffect(() =>   setBook({ ...newBook }), [newBook]);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <h1>Add Book</h1>
        <div>
          <label>Title</label>
          <div>
            <input
              id="title"
              value={book.title}
              placeholder="Add Title"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Info</label>
          <div>
            <input
              id="info"
              value={book.info}
              placeholder="Add Info"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <input type="submit" value="Save" onSubmit={handleSubmit} />
        </div>
      </form>
      <p>{JSON.stringify(book)}</p>
    </div>
  );
}
