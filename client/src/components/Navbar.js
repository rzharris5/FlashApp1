import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
          <Link
              to="/"
              style={{
                fontFamily: "ariel"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">home</i>
              Home <br /> <br />
            </Link>
            <Link
              to="/MostTrending"
              style={{
                fontFamily: "ariel"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">trending_up</i>
              Most Trending <br /> <br />
            </Link>
            <Link
            to="/Videos"
            style={{
              fontFamily: "ariel",
            }}
            className="col s5 brand-logo left black-text">
              <i className="material-icons">videocam</i>
              Videos <br /> <br />
            </Link>
            <Link
            to="/MyProfile"
            style={{
              fontFamily: "ariel"
            }}
            className="col s5 brand-logo left black-text">
              <i className="material-icons">person</i>
              My Profile <br /> <br />
            </Link>
          </div>
        </nav>
      </div>
</div>
      
    );

    
  }
}
export default Navbar;