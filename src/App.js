import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import PrivateRoute from "./components/common/PrivateRoute";

import Login from './components/pages/Login';
import MapContainer from './components/pages/MapContainer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/map" component={MapContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;