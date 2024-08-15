import React from 'react'
import d2 from "../../assets/d2.png"
import d1 from "../../assets/detail1.png"
import "./pd.css"

function PDSec1() {
  return (
    <div className='pdsec1cont'>

       {/* left side */}
       <img src={d1} alt="d1" className='pdsec1d1' loading='lazy' />

       {/* right sidde  */}
       <div className="pdsec1images">
         <img src={d2} alt="d2" loading='lazy' />
         <img src={d2} alt="d2" loading='lazy' />
         <img src={d2} alt="d2" loading='lazy' />
         <img src={d2} alt="d2" loading='lazy' />
       </div>
       

    </div>
  )
}

export default PDSec1