import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Details = (props) => {
    const {user} = props
  
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <table  class="table">
            <thead class="thead-dark">
              <tr>
                <th>Gender</th>
                <th>Title</th>
                <th>First</th>
                <th>Last</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Dob</th>
                <th>Phone</th>
                <th>Cell</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
                <tr >
                  <td>{user.gender}</td>
                  <td>{user.title}</td>
                  <td>{user.first}</td>
                  <td>{user.last}</td>
                  <td>{user.street}</td>
                  <td>{user.city}</td>
                  <td>{user.zip}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>{user.phone}</td>
                  <td>{user.cell}</td>
                </tr>
            </tbody>
          </table>
          <button><Link to={"/"}>Back</Link></button>
          
        </div>
      );
}


export default Details;