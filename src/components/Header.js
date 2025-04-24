import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "../assets/logos/logo_horizontal_lg_alpha.png";
import "./header.css";
import { Link } from "react-router-dom";


const Header = ({ navLinks }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const headerRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > lastScrollY) {
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        headerRef.current.style.transform = "translateY(0)";
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  
  return (
    <header>
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to="/#home">
          <img src={logoImage} alt="Little Lemon logo"/>
        </HashLink>
        <button
          className="nav-bar-hamburger"
          type="button"
          aria-label="On Click"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}
              aria-label="On Click"
              className="hover-underline-animation"
            >
              {navLink.hashLink ? (
                <HashLink to={navLink.path}>{navLink.name}</HashLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
 
  );
};
export default Header;