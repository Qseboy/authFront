import React, { Component, useState } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import { Navigation } from "./components/Nav/navigation";
import { Registration } from "./components/Registration/registration"
import { Login } from "./components/LoginPage/login"
import { DashBoard } from "./components/Dashboard/dashboard"

let users = [];   //масив юзеров

const App = (props) => {

  const [currentUser, setCurrentUser] = useState('')
  const [users, setUsers] = useState([])
  // console.log(users);
  // console.log(currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="app__wrapper">
          <Navigation />
        </div>
        <Switch>
          <Route exact path="/">
            <div>
              <h1>Registration</h1>
            </div>
          </Route>
          <Route
            exact path="/registration"
            render={(props) => <Registration users={users} {...props} setCurrentUser={setCurrentUser} setUsers={(user) => { setUsers([...users, user]) }} />}
          />
          <Route
            exact path="/login"
            render={(props) => <Login users={users} {...props} setCurrentUser={setCurrentUser} />}
          />
          <Route
            exact path="/dashboard"
            render={(props) => <DashBoard currentUser={currentUser} users={users} {...props} setCurrentUser={setCurrentUser} />}
          />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
