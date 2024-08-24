import React, { useState } from "react";
import "./pd.css";
import starts from "../../assets/startss.png";
import { motion } from "framer-motion";
import { LEFTSIDECONTENT1, RIGHTSIDECONTENT1, RIGHTSIDECONTENT2 } from "../../Data/PackageDetail";
import { IoIosArrowDown } from "react-icons/io";

const data = ["ITINERARY", "SUMMARISED VIEW"];

function PDSec2() {
  const [togleBtn, setTogleBtns] = useState(0);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="pdSec2wrap">

      {/* left side */}
      <div className="pdSec2left">
         
         <div className="daynigratingwrap">
                 <span className="dnihsamlle"> {LEFTSIDECONTENT1.totaldays} Days , {LEFTSIDECONTENT1.totaldays} Nights</span>
                 <span className="ratintotal"> <img src={starts} alt="" /> <span>{RIGHTSIDECONTENT1.rating}</span> ({RIGHTSIDECONTENT1.totalrating})</span>
         </div>

        <h2>{LEFTSIDECONTENT1.heading}</h2>

        <div className="pds22leftop">
          <p className="pdsltf mt-2">
            {LEFTSIDECONTENT1.totaldays}D/{LEFTSIDECONTENT1.totaldays}N
          </p>

          <div className="pdltse">

            {LEFTSIDECONTENT1.dayin.map((item, index) => (
              <div className="flex items-center gap-[17px]">
                <div key={index} className="pdflsfir">
                  <span>{item.daynum}</span>
                  <div>
                    <p>Day in</p>
                    <p>{item.destiny}</p>
                  </div>
                </div>

                {LEFTSIDECONTENT1.dayin.length !== index + 1 && (
                  <p className="verline"></p>
                )}
              </div>
            ))}

          </div>

        </div>

        <p className="line2"></p>

        {/* INCLUDED SECTION  */}
        <div className="includedSec">
          {LEFTSIDECONTENT1.includedSection.map((item, index) => (
            <div className="sinincluddiv">
              <img src={item.img} alt="" />
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        <p className="line2"></p>

        <div className="triphigh">
          <h3>{LEFTSIDECONTENT1.tripHighlightsHeading}</h3>

          <ul>
            {LEFTSIDECONTENT1.tripHightlight.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="toogleBtns">
          {data?.map((d, index) => (
            <button
              onClick={() => setTogleBtns(index)}
              className={`samebtnproepty ${
                index === togleBtn && "curtoglebtn"
              }`}
              key={index}
            >
              <span>{d}</span>
            </button>
          ))}
        </div>

        <div className="destinydetailssec">

          {LEFTSIDECONTENT1.destinyDetails.map((item, index) => (

            <div key={index} className="singldesity">

              <img src={item.img} alt="" className="pdimg3" />

              <div className="arivepotalDiv">

                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDetails(index)} >
                
                  <nav>
                    <p className="daytag">Day {item.daynum}</p>
                    <p className="arivtext"> {item.title}</p>
                    <p className="lineh2"></p>
                    <p className="totalcost">Total Cost : {item.totalCost}</p>
                  </nav>

                  <IoIosArrowDown />
                  
                </div>

                <motion.div
                  className={`packdetailInsidesec`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <hr className="mt-5" />
                  <p className="aftetext">{item.description}</p>
                  <hr />
                  <div className="pdsefistsec">
                    <h3>{item.transportType} Transport</h3>
                    <h4>{item.tranportIn}</h4>
                    <label>
                      <div className="shadowdiv">
                        <p>{item.From} </p>
                      </div>
                      <p className="fromtag">FROM</p>
                    </label>
                    <label>
                      <div className="shadowdiv">
                        <p>{item.to} </p>
                      </div>
                      <p className="fromtag">TO</p>
                    </label>
                  </div>

                  <hr />

                  <div className="pdsefistsec">
                    <h3>Stay At</h3>
                    <h4>{item.stayAt}</h4>
                    <div className="pdsesecondimage">
                      <div className="rowiamges">
                        <img src={item.stayImg1} alt="" />
                        <img src={item.stayImg2} alt="" />
                      </div>
                      <img src={item.stayImg3} className="rec92img" alt="" />
                    </div>
                  </div>

                  <hr />

                  <div className="pdsefistsec">
                    <h3>Activity</h3>
                    <h4>{item.activityHeading}</h4>
                    <img
                      src={item.activityImage}
                      className="detailcopy1"
                      alt=""
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* right side  */}
      <div className="pdSec2Right">
        <div className="sec2ritop">
          <div className="s2ttop">
            {/* left  */}

            <div className="pds2left">
              <p className="pdlepar1">
                INR <p>{RIGHTSIDECONTENT1.amount}</p> <span>per person</span>{" "}
              </p>
              <p className="pdlepar2">
                INR <span>{RIGHTSIDECONTENT1.cutAmount}</span>
              </p>
            </div>

            <div className="pds2topright">
              <img src={starts} alt="" />
              <span>{RIGHTSIDECONTENT1.rating}</span>
              <span>({RIGHTSIDECONTENT1.totalrating})</span>
            </div>
          </div>

          <p className="line1"></p>

          <button>
            <span>REQUEST ENQUIRY</span>
          </button>
        </div>

        <div className="formdetail">
          <h3>{RIGHTSIDECONTENT2.heading}</h3>

          <form>
            <label>
              <p>
                Full Name <span>*</span>
              </p>
              <input type="text" />
            </label>

            <label>
              <p>
                Email <span>*</span>
              </p>
              <input type="email" />
            </label>

            <div className="dohalf">
              <input
                type="number"
                placeholder="+91"
                className="phonenumbeint"
              />
              <input
                type="number"
                placeholder="Your Phone*"
                className="myphone"
              />
            </div>

            <div className="dohalf">
              <input
                type="text"
                placeholder="Travel Date*"
                className="Traveldate"
              />
              <input type="text" placeholder="Duration*" className="Duration" />
            </div>

            <textarea
              className="textaremesge"
              name=""
              id=""
              placeholder="Message..."
            ></textarea>

            <button className="requeeqebtn">
              <span>REQUEST ENQUIRY</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default PDSec2;
