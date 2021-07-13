import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <h2>JWT Authentication using JSON fake server</h2>
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
