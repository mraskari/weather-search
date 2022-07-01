import React, { MouseEventHandler, useState } from "react";
import "./navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { messageService } from "../../utils/subjects";

const Navbar = () => {

  return (
    <>
      <nav id="top-nav">
        <div className="container">
          <div className="row top-nav-container">
            <div className="dropdownmenu col-md-6 p-2 p-2">
              <ul>
                <li className="firstli">
                  <a href="#">
                    <i><HomeIcon /></i>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><CategoryIcon /></i>
                    <span>Products</span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="#">pos</a>
                    </li>
                    <li>
                      <a href="#">kiosk</a>
                    </li>
                    <li>
                      <a href="#">ATM</a>
                    </li>
                    <li>
                      <a href="#">software</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i><MiscellaneousServicesIcon /></i>
                    <span>Services</span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="#">remote</a>
                    </li>
                    <li>
                      <a href="#">on site</a>
                    </li>
                    <li>
                      <a href="#">phone</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i><InfoIcon /></i>
                    <span>About Us</span>
                  </a>
                </li>
                <li className="lastli">
                  <a href="#">
                    <i><CallIcon /></i>
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4  p-2  pt-2"></div>

            <div className="col-md-2 p-2  pt-2">
              <button id="signin-btn" type="button" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      <header id="sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-md-9 p-1 pe-2" id="searchbar">
              <input
                type="text"
                className="searchbox"
                placeholder="Type a city name"
                onChange={(e) => messageService.sendMessage(e.target.value)}
              />
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
