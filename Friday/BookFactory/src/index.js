import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import bookFactory from "./bookFactory";
import { BrowserRouter as Router } from "react-router-dom";

const AppWithRouter = () => {
  return (
    <Router>
      <App bookFactory={bookFactory} />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));