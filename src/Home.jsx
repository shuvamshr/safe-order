import "./Home.css";
import logoWhite from "./components/img/logo-white.svg";
import locationIcon from "./components/img/location.svg";
import chevronIcon from "./components/img/chevron.svg";
import pizzaBg from "./components/img/pizza-bg.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-main-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12">
            <div className="home-container">
              <img class="logo-white" src={logoWhite} alt="" />
              <div className="home-address-container">
                <div className="home-title">Order Momo To Your Door</div>
                <div className="home-form-container">
                  <button class="home-address-button">
                    <img src={locationIcon} alt="" className="location-icon" />
                    Enter Delivery Addresses
                  </button>
                  <button class="home-delivery-button">
                    Deliver Later
                    <img src={chevronIcon} className="chevron-icon" alt="" />
                  </button>
                  <Link to="/browse" class="home-find-button">
                    Find Nearby Pasta
                  </Link>
                </div>
                <div className="home-desc">
                  <Link to="/browse">Click Here</Link> for your current address
                </div>
              </div>
              <div className="home-footer">
                <div className="footer-text">Privacy</div>
                <div className="footer-text">Terms</div>
                <div className="footer-text">Settings</div>
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block d-lg-block col-xl-2 col-lg-2">
            <img src={pizzaBg} alt="" className="pizza-bg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
