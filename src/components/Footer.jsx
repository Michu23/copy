import React from "react";

const Footer = () => {
  return (
    <div className="first" style={{ gap: "0" }}>
      <div className="footer1">
        <h1>
          Streamline Your <br />
          Data Processes
        </h1>
        <div className="callcta">
          <p>
            Contact us today to learn more about our data management solutions &
            start optimizing your data management processes.
          </p>
          <button>
            <a href="hi">Book a Call</a>
          </button>
        </div>
      </div>
      <div className="footer2">
        <div className="footer2__container">
          <div className="logo__and__text">
            <div className="logo">Dview.io</div>
            <div className="text">
              <p>
                We growing up your business with
                <br />
                personal AI manager.
              </p>
            </div>
          </div>
          <div className="footer__links">
            <div className="links__column">
              <b>Platform</b>
              <a href="a">Plans and Pricing</a>
              <a href="b">Personal AI manager</a>
              <a href="c">AI Business Writer</a>
            </div>
            <div className="links__column">
              <b>Platform</b>
              <a href="a">Plans and Pricing</a>
              <a href="b">Personal AI manager</a>
              <a href="c">AI Business Writer</a>
            </div>
            <div className="links__column">
              <b>Platform</b>
              <a href="a">Plans and Pricing</a>
              <a href="b">Personal AI manager</a>
              <a href="c">AI Business Writer</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer3">
        <p>© 2023 Dview Inc. All rights reserved.</p>
        <div className="footer__row">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
