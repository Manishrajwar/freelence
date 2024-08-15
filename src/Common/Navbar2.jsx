import React from 'react'
import "./navbar.css"
import logo from "../assets/logo.png";
import smallnav from "../assets/smallnav.png"


const data = ["Places", "About", "Blog", "Contact", ""];


function Navbar2() {
  return (
    <div>

        {/* tag one  */}
        <div className="saletagwrap">

            <p>SALE INFO</p>

        </div>

        <div className="navbar2wrap">

            <div className="navbarCont2">

                 {/* left logo  */}
        <img src={logo} alt="" />

{/* nav items */}
<ul className="navitems2">
  {data.map((d, index) =>
    index <= 3 ? (
      <li key={index}>{d}</li>
    ) : (
      <button className="navbutton2">
        <span>Take a Trip </span>
      </button>
    )
  )}
</ul>

  <img src={smallnav} loading="lazy" alt="smallnav" className="smallnav" />

            </div>

        </div>

    </div>
  )
}

export default Navbar2