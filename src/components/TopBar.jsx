import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';


function TopBar() {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <div className="d-flex align-items-center">
            <FaEnvelope className="me-2" />
            <span>principle@bramaasschool.com</span>
          </div>
          <div className="vr mx-2 d-none d-md-block"></div>
          <div className="d-flex align-items-center">
            <FaPhone className="me-2" />
            <span>+95667 95556 / +95667 955566</span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaEnvelope />
          <FaPhone />
          <span className="border-start ps-3 ms-2">Online Payment</span>
        </div>
        
      </div>
    </div>
  );
}

export default TopBar;
