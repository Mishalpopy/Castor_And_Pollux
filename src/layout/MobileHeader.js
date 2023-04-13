import Link from "next/link";
import { useState } from "react";
const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) => (value == activeMenu ? "active" : "");
  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <a href="index.html">
          <img src="assets/img/logo.png" alt="Responsive Logo" />
        </a>
      </div>
      <ul>
        <li className={`menu-item-has-children ${activeSubMenu("home")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("home")}>
            Home
          </a>
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
        <li className={`menu-item-has-children ${activeSubMenu("Pages")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("Pages")}>
            Pages
          </a>
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
        <li className={`menu-item-has-children ${activeSubMenu("Portfolio")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("Portfolio")}>
            Portfolio
          </a>
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
        <li className={`menu-item-has-children ${activeSubMenu("Blog")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("Blog")}>
            Blog
          </a>
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
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};
export default MobileHeader;
