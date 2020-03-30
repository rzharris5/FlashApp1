import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h2>Register or Login to start!</h2>
            <br />
            <div className="col s6">
              <Link
                to="/Register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register <br /><br />
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/Login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Landing;