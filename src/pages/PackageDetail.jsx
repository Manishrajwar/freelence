import React from 'react'
import "./home.css"
import Navbar2 from '../Common/Navbar2'
import PDSec1 from '../components/Packagedetail/PDSec1'
import PDSec2 from '../components/Packagedetail/PDSec2'


function PackageDetail() {
  return (
    <section className='packageWrap'>

        <Navbar2 />

      <div className="pacakageWrapCont">

        <PDSec1  />

        <PDSec2 />

      </div>

    </section>
  )
}

export default PackageDetail