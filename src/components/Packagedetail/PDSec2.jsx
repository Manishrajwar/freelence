import React, { useEffect, useRef, useState } from "react";
import "./pd.css";
import { motion } from "framer-motion";
import { LEFTSIDECONTENT1, RIGHTSIDECONTENT2 } from "../../Data/PackageDetail";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import emailjs from '@emailjs/browser';


const data = ["ITINERARY", "SUMMARISED VIEW"];

function PDSec2({ packageView, isInView2  , setOpenform}) {
  const [togleBtn, setTogleBtns] = useState(0);
  const [openIndices, setOpenIndices] = useState([]);

  const toggleDetails = (index) => {
    if (openIndices.includes(index)) {
      // If the index is already in the array, remove it (close the div)
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // Otherwise, add it (open the div)
      setOpenIndices([...openIndices, index]);
    }
  };

  const [showform, setShowForm] = useState(false);

  const [isInView, setIsInView] = useState(false);
  const [isInView3, setIsInView3] = useState(false);
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);

  const [stayIsOpen, setStayIsOpen] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_smlm0mi", 'template_h5vec96', form.current, {
        publicKey: 'T46Q2vlyp0v8VpFSE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    // Toggle the section open/close
    const toggleOpen = () => {
      setStayIsOpen(!stayIsOpen);
    };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Change this value as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView3(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Change this value as needed
      }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);


  return (
    <>
      <div className="pdSec2wrap">
        {/* left side */}
        <div className="pdSec2left">
          <div className="daynigratingwrap">
            <span className="dnihsamlle">
              {" "}
              {packageView?.days} Days , {packageView?.night} Nights
            </span>
          </div>

          <h2>{packageView?.heading} <span>{packageView?.subtitle}</span></h2>

          <div className="pds22leftop">
            <p className="pdsltf mt-2">
              {packageView?.days}D/{packageView?.night}N
            </p>

            <div className="pdltse">
              {packageView?.dayIn?.map((item, index) => (
                <div className="flex items-center gap-[17px]">
                  <div key={index} className="pdflsfir">
                    <span>{item.day}</span>
                    <div>
                      <p>Day in</p>
                      <p>{item.desti}</p>
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
            {packageView?.included.map((item, index) => (
              <div className="sinincluddiv">
                <img src={item.img} alt="" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <p className="line2"></p>

          {/* <div className="triphigh">
            <h3>{LEFTSIDECONTENT1.tripHighlightsHeading}</h3>

            <ul>
              {LEFTSIDECONTENT1.tripHightlight.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div> */}

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

          <div ref={sectionRef} className="destinydetailssec">
            {packageView?.itinerary.map((item, index) => (
              <div key={index} className="singldesity">
                <img src={item.img} alt="" className="pdimg3" />

                <div className="arivepotalDiv">

                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDetails(index)}
                  >
                    <nav>
                      <p className="daytag">Day {item.daynum}</p>
                      <p className="arivtext">{item.title}</p>
                      <p className="lineh2"></p>
                      <p className="totalcost">Total Cost: {item.totalcost}</p>
                    </nav>
                    <IoIosArrowDown />
                  </div>

                  <motion.div
                    className={`packdetailInsidesec`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openIndices.includes(index) ? "auto" : 0,
                      opacity: openIndices.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <hr className="mt-5" />
                    {togleBtn === 0 && <p className="aftetext">{item.para}</p>}
                    {togleBtn !== 0 && (
                      <>

                        <div className="pdsefistsec">
                          {/* <h3>Work Expenditure</h3> */}

         <div className="alltranport">

                {
                  item?.transport?.map((tra , index)=>(
                    <>
                    <div key={index} className="tranpoorwrap">
                    <h4>{tra.trans}</h4>
                    <p>{tra.price}</p>
                  </div>
                    <hr />
                    </>
                  ))
                }

</div>


                        

                          {/* <label>
                            <div className="shadowdiv">
                              <p>{item.from}</p>
                            </div>
                            <p className="fromtag">FROM</p>
                          </label>
                          <label>
                            <div className="shadowdiv">
                              <p>{item.to}</p>
                            </div>
                            <p className="fromtag">TO</p>
                          </label> */}
                        </div>
                      </>
                    )}
                  </motion.div>

                </div>

              </div>
            ))}

            {/* this is for stay */}

        <div className="staywrap">
      {/* Clickable header */}
      <div className="cursor-pointer" onClick={toggleOpen}>
        <p className="totalcost">Hotels</p>
      </div>

      {/* Collapsible section */}
      <motion.div
        className={`staycontewrap`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: stayIsOpen ? "auto" : 0, opacity: stayIsOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        {packageView?.stayAt.map((item, index) => (
          <>

    <hr className="mt-5" />
         
          <div key={index} className="singstary">

            {/* left side */}
            <div className="stayleft">
              <p>{item.at}</p>
              <p>{item.hotel}</p>
              <p>{item.equa}</p>
            </div>

            {/* right side */}
            <div className="stayright">{item.price}</div>

          </div>
          
         
          </>
        ))}

         {/* <div className="totalstay">
           <p>Total</p>
            <span>{packageView?.totalStay}</span>
         </div> */}

      </motion.div>
    </div>


          </div>
        </div>

        {/* right side  */}
        <div className="pdSec2Right">
          <div ref={sectionRef2} className="sec2ritop">

            <div className="s2ttop">
              {/* left  */}

              <div className="pds2left">
                <p className="pdlepar1">
                  INR <p>{Math.floor(packageView?.GrandTotal/packageView?.numberOfPeople)}</p> <span>per person</span>{" "}
                </p>
              </div>
            </div>

            <p className="line1"></p>

            <button onClick={()=>setOpenform(true)}>
              <span>REQUEST ENQUIRY</span>
            </button>

          </div>

          <div
            className={`formdetail ${
              (isInView && !isInView2 && !isInView3) ? "fixed-position" : ""
            }`}
          >
            <h3>
              {RIGHTSIDECONTENT2.heading} {packageView?.totalbudget}
            </h3>

            <form ref={form} onSubmit={sendEmail}>
              <label>
                <p>
                  Full Name <span>*</span>
                </p>
                <input type="text" name='from_name' />
              </label>

              <label>
                <p>
                  Email <span>*</span>
                </p>
                <input type="email" name='from_email' required />
              </label>

              <div className="dohalf">
                <input
                  type="number"
                  placeholder="+91"
                  className="phonenumbeint"
                  required
                />
                <input
                  type="number"
                  placeholder="Your Phone*"
                  className="myphone"
                  required
                     name='from_number'
                />
              </div>

              <div className="dohalf">
                <input
                  type="text"
                  placeholder="Travel Date"
                  className="Traveldate"
                    name='from_travel'
                />
                <input
                  type="text"
                  placeholder="Duration"
                  className="Duration"
                   name='from_duration'
                />
              </div>

              <textarea
                className="textaremesge"
                placeholder="Message..."
                  name="message"
              ></textarea>

              <button className="requeeqebtn">
                <span>REQUEST ENQUIRY</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {!showform && (
        <div className="quersmalwidth">
          <button onClick={() => setShowForm(true)} className="sendenqbtn">
            <span>Send Enquiry</span>
          </button>
        </div>
      )}

      {showform && (
        <div className={`showformwrap ${showform ? "active" : ""}`}>
          <div className="formdetail2">
            <div
              onClick={() => setShowForm(false)}
              className="flex justify-end"
            >
              <RxCross2 color="#CCF32F" fontSize={40} className="RxCross2d" />
            </div>
            <h3>{RIGHTSIDECONTENT2.heading}</h3>
            <form ref={form} onSubmit={sendEmail}>
              <label>
                <p>
                  Full Name <span>*</span>
                </p>
                <input type="text" name='from_name' />
              </label>
              <label>
                <p>
                  Email <span>*</span>
                </p>
                <input type="email" name='from_email' />
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
                    name='from_number'
                />
              </div>
              <div className="dohalf">
                <input
                  type="text"
                  placeholder="Travel Date*"
                  className="Traveldate"
                      name='from_travel'
                />
                <input
                  type="text"
                  placeholder="Duration*"
                  className="Duration"
                    name='from_duration'
                />
              </div>
              <textarea
                className="textaremesge"
                placeholder="Message..."
                  name="message"
              ></textarea>
              <button className="requeeqebtn">
                <span>REQUEST ENQUIRY</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PDSec2;
