import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // connect is a higher order component
import { userSignIn, userSignOut } from "../actions";

class Nav extends Component {
  renderAuthButtons() {
    const { auth, userSignIn, userSignOut } = this.props;
    if (auth) {
      return (
        <button className="button pink lighten-1" onClick={userSignOut}>
          Sign Out
        </button>
      );
    }
    return (
      <button className="button purple lighten-2" onClick={userSignIn}>
        Sign In
      </button>
    );
  }

  render() {
    return (
      <nav style={{ padding: "0 8px" }} className="pink lighten-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Auth Demo
          </Link>
          <ul className="right">
            <li>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/secret-list">Secret List</Link>
            </li>
            <li>{this.renderAuthButtons()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    // whatever we put here, will be added to our props
    auth: state.user.auth
  };
}

//mapStateToProps function can be named anything, this is just convention
export default connect(
  mapStateToProps,
  {
    userSignIn: userSignIn,
    userSignOut: userSignOut
  }
)(Nav);
