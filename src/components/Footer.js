import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#offers">Offers & Discounts</a></li>
            <li><a href="#coupon">Get Coupon</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="links">
          <h3>Support</h3>
          <ul>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="#payment-issue">Report a Payment Issue</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SkyHorizon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
