import React, { useState } from "react";
import "./pd.css";
import starts from "../../assets/startss.png";
import pdimg3 from  "../../assets/pdimg3.png"
import rec92 from "../../assets/Rectangle 1922.png"
import rec90 from "../../assets/Rectangle 1920.png"
import copy1 from "../../assets/detailcopy1.png"
import copy2 from "../../assets/detailcopy2.png"
import copy3 from "../../assets/detailcopy3.png"
import copy4 from "../../assets/detailcopy4.png"
import copy5 from "../../assets/detailcopy5.png"
import copy6 from "../../assets/detailcopy6.png"

const data = [ "ITINERARY" , "SUMMARISED VIEW"]

function PDSec2() {

    
 const [togleBtn , setTogleBtns] = useState(0);

  return (

    <div className="pdSec2wrap">

      {/* left side */}
      <div className="pdSec2left">

        <h2>Create the Chapters of Love in the Andamans</h2>

        <div className="pds22leftop">
          <p className="pdsltf">6D/5N</p>

          <div className="pdltse">
            <div className="pdflsfir">
              <span>1</span>
              <div>
                <p>Day in</p>
                <p>Portblair</p>
              </div>
            </div>

            <p className="verline"></p>

            <div className="pdflsfir">
              <span>1</span>
              <div>
                <p>Day in</p>
                <p>Portblair</p>
              </div>
            </div>

            <p className="verline"></p>

            <div className="pdflsfir">
              <span>1</span>
              <div>
                <p>Day in</p>
                <p>Portblair</p>
              </div>
            </div>
          </div>

        </div>

        <p className="line2"></p>

        <p className="line2 addmargintop"></p>


        <div className="triphigh">
          <h3>Trip Highlights</h3>

          <ul>
            <li>
              Gear up for exciting sea kart and water-scooter rides that promise
              a thrilling adventure in Andaman.
            </li>
            <li>
              Gear up for exciting sea kart and water-scooter rides that promise
              a thrilling adventure in Andaman.
            </li>
            <li>
              Gear up for exciting sea kart and water-scooter rides that promise
              a thrilling adventure in Andaman.
            </li>
            <li>
              Gear up for exciting sea kart and water-scooter rides that promise
              a thrilling adventure in Andaman.
            </li>
          </ul>
        </div>

         <div className="toogleBtns">

            {
                data?.map((d , index)=>(
                    <button onClick={()=>setTogleBtns(index)} className={`samebtnproepty ${index === togleBtn && "curtoglebtn"}`} key={index}><span>{d}</span></button>
                ))
            }

         </div>

         <img src={pdimg3} alt="" className="pdimg3" />

         <div className="arivepotalDiv">

            <nav>
                <p className="daytag">Day 1</p>
                <p className="arivtext"> Arrival in Portblair</p>
                <p className="lineh2"></p>
                <p className="totalcost">Total Cost : $10</p>
            </nav>

            <hr />

            <p className="aftetext">After arrival, you will be transferred to the hotel for check in. Later, you will get transferred to the Corbyn Cove Beach, admire its beautiful shore and palm trees. Next, you will visit the Cellular Jail and enjoy a light show, before getting dropped off at the hotel for an overnight stay.</p>

            <hr />

            <div className="pdsefistsec">
              <h3>Private Transport</h3>
              <h4>Transfer in Sedan, SUV or similar</h4>

               <label>

              <div className="shadowdiv">
                <p>Veer Savarkar International Airport </p>
              </div>

              <p className="fromtag">
                FROM
              </p>

               </label>

               <label>

              <div className="shadowdiv">
                <p>Veer Savarkar International Airport </p>
              </div>

              <p className="fromtag">
                TO
              </p>

               </label>


            </div>

          <hr />

          <div className="pdsefistsec">
              <h3>Stay At</h3>
              <h4>Transfer in Sedan, SUV or similar</h4>

         
                <div className="pdsesecondimage">

                     <div className="rowiamges">
                       <img src={rec90} alt="" />
                       <img src={rec90} alt="" />
                     </div>

                     <img src={rec92} className="rec92img" alt="" />

                </div>


            </div>

            <hr />

            <div className="pdsefistsec">
              <h3>Activity</h3>
              <h4>Day Trip to Corbyn Cove Beach and Cellular Jail on a Private basis</h4>

         
               <img src={copy1} className="detailcopy1" alt="" />

            </div>

         </div>

         <img src={copy2} alt="" className="detailcopy1" />

         <div className="arvidiv">
          <p className="daytag">Day 2</p>
          <h3>Arrival in Portblair</h3>
          <p className="linevert"></p>
          <p className="totacost">Total Cost : $10</p>
         </div>

         <img src={copy3} alt="" className="detailcopy1" />

         <div className="arvidiv">
          <p className="daytag">Day 3</p>
          <h3>Arrival in Portblair</h3>
          <p className="linevert"></p>
          <p className="totacost">Total Cost : $10</p>
         </div>

         <img src={copy4} alt="" className="detailcopy1" />

         <div className="arvidiv">
          <p className="daytag">Day 4</p>
          <h3>Arrival in Portblair</h3>
          <p className="linevert"></p>
          <p className="totacost">Total Cost : $10</p>
         </div>

         <img src={copy5} alt="" className="detailcopy1" />

         <div className="arvidiv">
          <p className="daytag">Day 5</p>
          <h3>Arrival in Portblair</h3>
          <p className="linevert"></p>
          <p className="totacost">Total Cost : $10</p>
         </div>
         <img src={copy6} alt="" className="detailcopy1" />

         <div className="arvidiv">
          <p className="daytag">Day 6</p>
          <h3>Arrival in Portblair</h3>
          <p className="linevert"></p>
          <p className="totacost">Total Cost : $10</p>
         </div>

      </div>

      {/* right side  */}
      <div className="pdSec2Right">

        <div className="sec2ritop">
          <div className="s2ttop">
            {/* left  */}

            <div className="pds2left">
              <p className="pdlepar1">
                INR <p>20000</p> <span>per person</span>{" "}
              </p>
              <p className="pdlepar2">
                INR <span>15000</span>
              </p>
            </div>

            <div className="pds2topright">
              <img src={starts} alt="" />
              <span>4.5</span>
              <span>(1k)</span>
            </div>
          </div>

          <p className="line1"></p>

          <button>
            <span>REQUEST ENQUIRY</span>
          </button>
        </div>

        <div className="formdetail">
          <h3>Create the Chapters of Love in the Andamans INR 19,800</h3>

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
