import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "transparent" }
      }
    >
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <img alt="logo" src="assets/img/CASTOR.png" />
                  ) : (
                    <img alt="logo" src="assets/img/CASTOR.png" />
                  )}
                </a>
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/">
                      homepage 1
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-2">
                      homepage 2
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-3">
                      homepage 3
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="about">
                  About
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="about">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="team">
                      team
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="pricing">
                      pricing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="404error">
                      404 error
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="portfolio-grid">
                  Portfolio
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="portfolio-grid">
                      portfolio grid
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-masonry">
                      portfolio masonry
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-metro">
                      portfolio metro
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-single-v1">
                      portfolio single v1
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-single-v2">
                      portfolio single v2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="blog-grid">
                  Blog
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="blog-grid">
                      blog grid
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-single-post">
                      blog single post 1
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-single-post-2">
                      blog single post 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="contacts">
                  contacts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <form id="content">
              <input
                type="text"
                name="input"
                className={`input ${searchToggle ? "square" : ""}`}
                id="search-input"
              />
              <button
                type="reset"
                className={`search ${searchToggle ? "close" : ""}`}
                id="search-btn"
                onClick={() => setSearchToggle(!searchToggle)}
              />
            </form>
            <Link legacyBehavior href="/contacts">
              <a className="themebtu">Get Started</a>
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;
