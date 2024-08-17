import React, { useState } from 'react';
import "./pdsec3.css";

const data = [
    {
        heading: "Hotel policies", 
        li: [
            "Couples are welcome", 
            "Guests can check in using any local or outstation ID proof (PAN card not accepted).", 
            "Only Indian Nationals allowed", 
            "As a complimentary benefit, your stay is now insured by Acko.", 
            "This hotel is serviced under the trade name of Hotel Devi Palace Inn as per quality standards of OYO"
        ]
    },
    {
        heading: "Refund Policy", 
        li: [
            "Couples are welcome", 
            "Guests can check in using any local or outstation ID proof (PAN card not accepted).", 
            "Only Indian Nationals allowed", 
            "As a complimentary benefit, your stay is now insured by Acko.", 
            "This hotel is serviced under the trade name of Hotel Devi Palace Inn as per quality standards of OYO"
        ]
    },
    {
        heading: "Cancellation policy", 
        li: [
            "Couples are welcome", 
            "Guests can check in using any local or outstation ID proof (PAN card not accepted).", 
            "Only Indian Nationals allowed", 
            "As a complimentary benefit, your stay is now insured by Acko.", 
            "This hotel is serviced under the trade name of Hotel Devi Palace Inn as per quality standards of OYO"
        ]
    },
];

function PDSec5() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='pdsec5wwrap'>
      {data.map((item, index) => (
        <div key={index} className={`singlediv ${openIndex === index ? 'open' : ''}`}>
          <div className="headingdiv" onClick={() => toggleOpen(index)}>
            <p>{item.heading}</p>
          </div>

          {openIndex === index && (
            <ul className="pdsecdtalines">
              {item.li.map((listItem, liIndex) => (
                <li key={liIndex} className="singli">
                  • {listItem}
                </li>
              ))}
              <div className="viewgustdiv">View guest policy</div>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default PDSec5;
