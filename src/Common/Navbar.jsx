import React, { useState } from "react";
import "./common.css";
import logo from "../assets/logo.png";
import smallnav from "../assets/smallnav.png"
import cross22 from "../assets/cross22.png"
import { motion } from "framer-motion";

const data = ["Places", "About", "Blog", "Contact", ""];

function Navbar() {

  const [opensidebar, setOpensidebar] = useState(false);

  return (

    <>
   
    <nav className="navbarwrapper">

      <div className="navcont">

        {/* left logo  */}
        <img src={logo} alt="" className="logo" />

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

          <img onClick={()=>setOpensidebar(true)} src={smallnav} loading="lazy" alt="smallnav" className="smallnav" />

      </div>


    </nav>

    <motion.div
            className={`slidebarslidecont ${opensidebar ? 'open' : ''}`}
            initial={{ x: '100%' }} // Initial position off-screen
            animate={{ x: opensidebar ? 0 : '100%' }} // Slide in/out based on state
            transition={{ duration: 0.3 }} // Smooth transition
        >
            <div className="cross22">
                <img onClick={() => setOpensidebar(false)} src={cross22} alt="Close" />
            </div>
            <div className="allnavitems">
                {data.map((item, index) => (
                    <p key={index} className="sinnav">
                        {item}
                    </p>
                ))}
            </div>
        </motion.div>

    </>

  );
}

export default Navbar;
