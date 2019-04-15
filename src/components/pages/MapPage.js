import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logoutUser } from "../../store/actions/index";

class MapPage extends Component {
  logoutHandler = () => {
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return (
        <div>
          <div className="column column-25">
            Map Page
          </div>
          <div className="column column-75">
            Map Page
            <button className="button" onClick={this.logoutHandler}>Logout</button>
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