import React, { Component, useState, useEffect } from 'react';
import { Route, BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'
import './App.css';
import { Navigation } from "./components/Nav/navigation";
import { Registration } from "./components/Registration/registration"
import { Login } from "./components/LoginPage/login"
import { DashBoard } from "./components/Dashboard/dashboard"

let users = [];   //масив юзеров


class App extends React.Component {
  state = {
    currentUser: null,
    users: []
  }

  constructor(props) {
    super(props);

    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.setUsers = this.setUsers.bind(this);

  }

  setCurrentUser(user) {
    this.setState({ currentUser: user })
  }

  setUsers(users) {
    this.setState({ users });
  }



  render() {
    const { users, currentUser } = this.state;
    const { name } = this.props;


    return (
      <div className="App">
        <BrowserRouter>
          <div className="app__wrapper">
            <Navigation />
          </div>
          <Switch>
            <Route
              exact path="/registration"
              render={(props) => <Registration users={users} {...props} setCurrentUser={this.setCurrentUser} setUsers={(user) => { this.setUsers([...users, user]) }} />}
            />
            <Route
              exact path="/login"
              render={(props) => <Login users={users} currentUser={currentUser} {...props} setCurrentUser={this.setCurrentUser} />}
            />
            <Route
              exact path="/dashboard"
              render={(props) => currentUser ? (<DashBoard currentUser={currentUser} users={users} {...props} setCurrentUser={this.setCurrentUser} />) : (<Redirect to="login" />)}  //Defender dashboard, redirect to login
            />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}



export default App;
