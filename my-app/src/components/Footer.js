import { useState } from 'react';
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-links">
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
