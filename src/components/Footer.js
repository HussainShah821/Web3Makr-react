import React from 'react';
import Logo from "../Assets/Images/Logo.png";
import InstaIcon from '../Assets/Images/InstaIcon.png';
import twitter from '../Assets/Images/twitter.png';
import facebook from '../Assets/Images/facebook.png';

const Footer = () => {
  return (
    <section className="footer w-100">
      <div className="row w-100">
        <div className="container my-4">
          <img src={Logo} className="footer-logo" alt="" />
        </div>
        <br />

        <ul className="list-unstyled d-flex flex-row footer-list">
          <li className="active mx-3">Web3Makr</li>
          <li className="dark mx-3">White paper</li>
          <li className="dark mx-3">Services</li>
          <li className="dark mx-3">Tool</li>
          <li className="dark mx-3">Contact us</li>
        </ul>

        <br />
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <p className="copyright">Copyright 2022 © Web3makr</p>
          </div>
          <div className="col-md-6">
            <div className="container footer-icons d-flex">
              <img src={InstaIcon} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
