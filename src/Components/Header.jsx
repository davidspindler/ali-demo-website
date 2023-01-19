import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <main className="centered">
      <h1>Ali Mohamed</h1>
      <p>Photography based in Orange County</p>
      <p>Email: alimohamediscool@gmail.com</p>
      <Link to="/photos" className="btn">
        View Photos
      </Link>
      <footer>
        <p>
          <a href="mailto:hege@example.com">links will go here</a>
        </p>
      </footer>
    </main>
  );
};

export default Header;
