import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Category = ({ match }) => {
  return( <div> <ul>
      <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
      <li><Link to={`${match.url}/boots`}>Boots</Link></li>
      <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
  
    </ul>
    <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
    </div>)
  }

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

export default function App(){
  return (
    <BrowserRouter>
    <Header />
    <Context />
    </BrowserRouter>
  )
}

const Header = () => {
  return (
    <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
       </nav>
  );
}

const Context = () => {
  return(
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/category" component={Category}/>
      <Route path="/products" component={Products}/>
    </div>
  )
}
    

/* Code for Home and Products component omitted for brevity */