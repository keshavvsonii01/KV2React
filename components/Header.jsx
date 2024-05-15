import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/main.css";
import '../css/venobox.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import 'odometer/themes/odometer-theme-default.css';
import 'jquery-nice-select/css/nice-select.css';
import 'swiper/swiper-bundle.css';
import '../js/main.js';
function Header() {
  return (
    <>
    <header className="header header-2 header-3 sticky-active">
      <div className="primary-header">
        <div className="header-container">
          <div className="primary-header-inner inner-2">
            <div className="header-logo d-lg-block">
              <a href="index.html">
                <img
                  className="light"
                  src="assets/img/logo/logo-dark.png"
                  alt="Logo"
                />
                <img
                  className="dark"
                  src="assets/img/logo/logo-dark.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="header-menu-wrap">
              <div className="mobile-menu-items">
                <ul>
                  <li className="active">
                    <a href="#">Home</a>
                    
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li >
                    <a href="service.html">Service</a>
                  </li>
                  <li className="">
                    <a href="project.html">Projects</a>
                  </li>
                  <li className="">
                    <a href="blog-grid.html">Blog</a>
                  </li>
                  
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="header-right">
              <a href="contact.html" className="pb-primary-btn header-btn"
                >Contact Now<i className="fa-regular fa-arrow-right"></i
              ></a>
              <div className="header-right-item">
                <a
                  href="javascript:void(0)"
                  className="mobile-side-menu-toggle d-lg-none"
                  ><i className="fa-sharp fa-solid fa-bars"></i
                ></a>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      
    </header>

    <div id="popup-search-box">
      <div className="box-inner-wrap d-flex align-items-center">
        <form id="form" action="#" method="get" role="search">
          <input
            id="popup-search"
            type="text"
            name="s"
            placeholder="Type keywords here..."
          />
        </form>
        <div className="search-close">
          <i className="fa-sharp fa-regular fa-xmark"></i>
        </div>
      </div>
    </div>

    <div className="preloader">
      <img src="public\images\preloader\proloader.gif" alt="preloader-icon" />
    </div>

    <div className="mobile-side-menu">
      <div className="side-menu-content">
        <div className="side-menu-head">
          <a href="index.html"
            ><img src="assets/img/logo/logo-dark.png" alt="logo"
          /></a>
          <button className="mobile-side-menu-close">
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>
        <div className="side-menu-wrap"></div>
        <div className="contact-item item-2">
          <ul className="contact-list">
            <li>Address : <span>Tajganj, Agra, India</span></li>
            <li>Phone : <a href="tel:+917817839858">+91 7817839858</a></li>
            <li>
              Email : <a href="mailto:kriativevilla@gmail.com">kriativevilla@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mobile-side-menu-overlay"></div>

    </>
  )
}

export default Header;
