import React from 'react';
import '../Stlyes/Grid.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            {/* <p>Lets play Games!!!!</p> */}
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaLinkedin /></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: md@gamevortex.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="text-muted">© 2023 GameVortex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
