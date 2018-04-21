import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const style = {
  backgroundColor: '#241f41',
  borderTop: '1px solid #E7E7E7',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '205px',
  width: '100%',
  opacity: '0.48'
};

const phantomStyle = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%'
};

const links = [
  'Terms and conditions',
  'Doctors',
  'Patients',
  'Privacy',
  'Sitemap',
  'Rewards'
];

export default props => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={style} className="Fondo">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <h5>News</h5>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Sign up</a>
                  </li>
                  <li>
                    <a href="#">Downloads</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-3 oneBorder">
                <ul className="ulFootter">
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-3 bothBorders">
                <ul className="ulFootter">
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-3 info">
                <h5>Information</h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
