import { useState } from "react";
import { motion } from "framer-motion";
import "./pdsec3.css";

function PDSec3({ sectionRef2, packageView }) {
  const [stayIsOpen, setStayIsOpen] = useState(false);

  // Toggle the section open/close
  const toggleOpen = () => {
    setStayIsOpen(!stayIsOpen);
  };

  return (
    <div ref={sectionRef2} className="pdsec3wrap">

      <div className="pdsec3top">
        <p></p>
        <h3>End Of Trip</h3>
        <p></p>
      </div>

      <ul className="pdsec3secodiv">

        <label className="addpaddlabel">
          <p className="bolddtext">Total for the hotels on CP Plan</p>
          <span className="bolddtext">{packageView?.hotelCP}</span>
        </label>

        <hr />

        <div className="ttiwrap">

<h4>Transportation And Tickets </h4>
    
          {
           packageView?.transportTicket?.map((item , index)=>(
             <label className=""  key={index}>
             <p>{item?.title}</p>
             <span >{item?.price}</span>
           </label>
           ))
          }

<label >
           <p>Total</p>
           <span>{packageView?.packageTotal}</span>
         </label>



</div>

       
         

          <div className="staywrap2">
            {/* Clickable header */}

            <div className="cursor-pointer" onClick={toggleOpen}>
              <p className="transheading">Transportation And Tickets <span className="showtotarans">{packageView?.packageTotal}</span></p>
            </div>

            {/* Collapsible section */}
            <motion.div
              className={`tran_mainContent ${stayIsOpen && "whenOpen"}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: stayIsOpen ? "auto" : 0,
                opacity: stayIsOpen ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
                {packageView?.transportTicket?.map((item, index) => (

<>
                  <label  key={index}>
                    <p >{item?.title}  <span>({item?.price})</span></p>
                    
                    <span  className="disnone">{item?.price}</span>
                  </label>

    {
      index <=0 && 
                  <hr />
    }

</>
                ))}

                <label className="thistotalhide">
                  <p >Total <span>({packageView?.packageTotal})</span></p>
                  <span  className="disnone">{packageView?.packageTotal}</span>
                </label>

            </motion.div>
          </div>

        <hr />

         <div className="grand_contetn">

        
        <label className="boldlabel">
          <p>Subtotal</p>
          <span>{packageView?.packageSubTotal}</span>
        </label>

        <label>
          <p>MavenAndaman Service Charge 5 %:</p>
          <span>{packageView?.serviceCharge}</span>
        </label>

        <label>
          <p>5% GST on service charge:</p>
          <span>{packageView?.GSTCharge}</span>
        </label>

        <label className="boldlabel">
          <p>Grand total:</p>
          <span>{packageView?.GrandTotal}</span>
        </label>

        </div>

      </ul>

    </div>
  );
}

export default PDSec3;
