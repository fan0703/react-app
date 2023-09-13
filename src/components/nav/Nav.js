import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav(props) {
  return (
    <div className="Nav">
      <Link to="/">
        <div className="title">FanNews</div>
      </Link>
      <div className="Nav_right">
        <Link to="/about">
          <div className="head">About</div>
        </Link>
        <Link to="/Sign_in">
          <div className="head">Sign in</div>
        </Link>
      </div>
    </div>
  );
}