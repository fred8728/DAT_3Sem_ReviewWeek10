import React, { useState } from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

const AllUsers = props => {
  //users and getData from App.js useState
  const { users, getData } = props;

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link>
      <table  class="table">
        <thead class="thead-dark">
          <h1>All Users</h1>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={index}>
              <td>
                {data.first} {data.last}
              </td>
              <td>
                {" "}
                <button><Link
                  to={`details/${index}`}
                  onClick={e => {
                    getData(data);
                  }}
                >
                  {" "}
                  Details
                </Link></button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button><Link to={"/"}>Back</Link></button>
      
    </div>
  );
};

export default AllUsers;
