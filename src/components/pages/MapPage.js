import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logoutUser } from "../../store/actions/index";

import Device from '../Device';

import './Map.scss';

class MapPage extends Component {
  state = {
    devices: []
  }

  logoutHandler = () => {
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return (
        <div className="row m-0" style={{ width: '100%', height: '100vh', background: "#f4f4f4" }}>
          <div className="column column-25 sidebar">
            <h3 className="mt-20 ml-20">Devices</h3>
            <Device />
            <div className="logout-container column column-25 center text-center">
              <button className="button" onClick={this.logoutHandler}>Logout</button>
            </div>
          </div>
          <div className="column column-75 map-container">
            Map Here
          </div>
        </div>
      )
    }
  }
}

MapPage.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPage);