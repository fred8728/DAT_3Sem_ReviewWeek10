import React from "react";
import { Route, Link, useRouteMatch, useParams } from "react-router-dom";

//dekonstruktion bookfactory
const Products = ({ bookFactory }) => {
  const {deleteBook} = bookFactory;
  let match = useRouteMatch();
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link>
      <br></br>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {bookFactory.getBooks().map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>
                <Link to={`${match.url}/${book.title}/${book.id}/${book.info}`}>
                  Details
                </Link>
              </td>
              <td>
                <a
                  href="xx"
                  onClick={e => {
                    e.preventDefault();
                    deleteBook(book.id);
                  }}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <Route path={`${match.path}/:title/:bookID/:details`}>
        <Book></Book>
      </Route>
    </div>
  );
};

function Book() {
  let { title, bookID, details } = useParams();
  return (
    <div>
      <p>Detailed info for the title: {title}</p>
      <p>ID: {bookID}</p>
      <p>Info: {details}</p>
    </div>
  );
}

export default Products;
