import React, { Component } from "react";
import { connect } from "react-redux";
import AuthContainer from "../AuthContainer";
import { loginUser } from "../../store/actions/index";

class Login extends Component {
  state = {
    formData: {
      username: '',
      password: ''
    }
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/map");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/map");
    }
  }

  inputChangedHandler = (event) => {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      grant_type: "password",
      username: this.state.formData.username,
      password: this.state.formData.password
    };

    this.props.loginUser(userData);
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center" style={{ height: '100vh', alignItems: 'center' }}>
          <div className="column-50">
            <AuthContainer>
              <form onSubmit={this.submitHandler} className="mt-4">
                <div className="p-20">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.formData.username}
                    onChange={event => this.inputChangedHandler(event)}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.formData.password}
                    onChange={event => this.inputChangedHandler(event)}
                  />
                </div>
                <button className="button" type="submit">Login</button>
              </form>
            </AuthContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    response: state.response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => dispatch(loginUser(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);