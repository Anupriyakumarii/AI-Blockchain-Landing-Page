import React from "react";
import "../Navbar/Navbar.css";
import { FaGithub, FaDiscord, FaCamera, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <section>
        <header className="navbar">
          <div className="logo">Serendale</div>
          <nav>
            <ul className="nav-links">
              <li>Smart Contracts</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Roadmap</li>
              <li>Whitepaper</li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaDiscord />
            </a>
            <a href="#">
              <FaCamera />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </header>
      </section>
    </>
  );
};

export default Navbar;
