import "./Footer.css";
import ame from "../assets/images/icons8-usa-48.png";
import googlepay from "../assets/images/icons8-google-pay-48.png";
import mastercard from "../assets/images/icons8-mastercard-48.png";
import paypal from "../assets/images/icons8-paypal-48.png";
import amex from "../assets/images/icons8-amex-48.png";
import applepay from "../assets/images/icons8-apple-pay-48.png";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="ftleft">
          <div>
            <h3>Be the first to know</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sagittis
            </p>
          </div>
          <div className="ftldown">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="ftright">
          <div>
            <h3>Contact Us</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h3>Currency</h3>
            <div className="currency">
              <img src={ame} alt="america" />
              <p>. USD</p>
            </div>
            <p>
              Transaction will be completed inn Euros and a currency reference
              is available on hover
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <h3>metta muse</h3>
          <p>About Us</p>
          <p>Stores</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliance Docs</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>Orders & Shipping</p>
          <p>Join.Login as a seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQS</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <div>
            <h3>Follow Us</h3>
            <div>
              <FaInstagram />
              <CiLinkedin />
            </div>
          </div>
          <div>
            <h4>metta muse ACCEPTS</h4>
            <div>
              <img src={googlepay} alt="google pay" />
              <img src={mastercard} alt="master card" />
              <img src={paypal} alt="paypal" />
              <img src={amex} alt="amex" />
              <img src={applepay} alt="applepay" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; 2023 mettamuse. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
