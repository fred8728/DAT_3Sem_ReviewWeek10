import React, {useEffect, useState} from "react";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import AddBook from './AddBook'
import Products from './Products'

const NoMatch = () => <div>Urlen matcher ingen kendte routes</div>;
const Home = () => <div>Home</div>;
const Company = () => <div>Company</div>;

function App({bookFactory}) {

  return (
    <Router>
      <Header />
      <Content bookFactory={bookFactory} />
    </Router>
  );
}

function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/add-book">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
    </ul>
  );
}

function Content(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products bookFactory={props.bookFactory} />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/add-book">
        <AddBook bookFactory={props.bookFactory} />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
