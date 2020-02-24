import React, { useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams
} from "react-router-dom";
import data from "./data/data.json";
import Welcome from "./Welcome"
import AllUsers from "./AllUsers";
import NoMatch from "./NoMatch";
import Details from "./Details";



function App() {
const [user, setUser] =useState([{}])
const[users, setUsers] = useState([])

function getData (user){
  setUser({...user})
}

useEffect(() => {
  setUsers(data.users)
},[])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/all">
            <AllUsers users={users} getData={getData} />
          </Route>
          <Route path="/details/:index">
            <Details user={user} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}




export default App;
