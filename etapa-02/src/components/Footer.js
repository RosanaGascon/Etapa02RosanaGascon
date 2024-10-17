// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
      <div className="container bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
              <a className="btn btn-link" href="https://example.com/about">About Us</a>
              <a className="btn btn-link" href="https://example.com/contact">Contact Us</a>
              <a className="btn btn-link" href="https://example.com/reservation">Reservation</a>
              <a className="btn btn-link" href="https://example.com/privacy-policy">Privacy Policy</a>
              <a className="btn btn-link" href="https://example.com/terms">Terms & Condition</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="https://example.com">Your Site Name</a>, All Right Reserved. 
                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="https://example.com/home">Home</a>
                  <a href="https://example.com/cookies">Cookies</a>
                  <a href="https://example.com/help">Help</a>
                  <a href="https://example.com/faqs">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
