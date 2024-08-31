import React from "react";
import "./common.css";


function Footer() {


  const phoneNumber = '8900913929'; // Replace with the phone number

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footerwrap">
      <div className="footecont">
        
        <div className="footercdetails">
          
          {/* frist section */}
          <div className="fotsec2">

            <label>
              <h3>Call Us</h3>
              <p>+91 8900913929</p>
            </label>

            <label>
              <h3>Email</h3>
              <p>mavenandaman@gmail.com</p>
            </label>
          </div>

          <div className="fotsec1">
            <label>
              <h3>About Us</h3>
              <p>Our Story</p>
              <p>Travel Blogs & tips</p>
              <p>Working with Us</p>
              <p>Be Our Partner</p>
            </label>
          </div>

          <div className="fotsec1">
            <label>
              <h3>Social Media</h3>
              <a href="https://www.instagram.com/mavenandaman/"><p>Instagram</p> </a> 
             <a href="https://www.facebook.com/mavenandaman/"> <p>Facebook</p> </a>
             <a href="#" onClick={handleClick}>  <p>WhatsApp</p></a>
            </label>
          </div>

          {/* <div className="fotsec1">
            <label>
              <h3>Pay Safely With Us</h3>
              <p className="adwidth">
                The payment is encrypted and transmitted securely with an SSL
                protocol.
              </p>
            </label>
          </div> */}

        </div>

    
      </div>
    </footer>
  );
}

export default Footer;
