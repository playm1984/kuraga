import React, { Component } from "react";

import history from "../../router-pages/history.js";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends Component {
  render() {
    const userNow = this.props.data.auth;
    let per = userNow === true ? "/profile" : "/login";
    // let per = '/profile'
    return (
      <div className="header">
        <div className="header-content">
          <Link to="/">Main</Link>
          <Link to="/login">Login</Link>
          <Link to="/posts">Posts</Link>
          <Link to={per}>Profile</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (data) => {
  return { data };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);