
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">Company</a>
              </li>
              <li>
                <a href="#home">Portfolio</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            Backoffice de TECSO
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
