import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/HomePlatzi.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';

export default class HomePlatzi extends Component {
  render() {
    return (
      <div className="HomePlatzi">
        <div className="container">
          <div className="row">
            <div className="HomePlatzi__col col-12 col-md-4">
              <img
                src={platziconfLogoImage}
                alt="motsi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Card Management System</h1>
              <Link className="btn btn-primary" to="/home">
                Start
              </Link>
            </div>

            <div className="HomePlatzi__col d-none d-md-block col-md-8">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
