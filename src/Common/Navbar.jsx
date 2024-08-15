import React from "react";
import "./common.css";
import logo from "../assets/logo.png";
import smallnav from "../assets/smallnav.png"

const data = ["Places", "About", "Blog", "Contact", ""];

function Navbar() {
  return (
    <nav className="navbarwrapper">

      <div className="navcont">

        {/* left logo  */}
        <img src={logo} alt="" />

        {/* nav items */}
        <ul className="navitems">
          {data.map((d, index) =>
            index <= 3 ? (
              <li key={index}>{d}</li>
            ) : (
              <button className="navbutton">
                <span>Take a Trip </span>
              </button>
            )
          )}
        </ul>

          <img src={smallnav} loading="lazy" alt="smallnav" className="smallnav" />

      </div>
    </nav>
  );
}

export default Navbar;
