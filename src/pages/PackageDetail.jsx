import React from 'react'
import "./home.css"
import Navbar2 from '../Common/Navbar2'
import PDSec1 from '../components/Packagedetail/PDSec1'
import PDSec2 from '../components/Packagedetail/PDSec2'
import PDSec3 from '../components/Packagedetail/PDSec3'
import Homesec5 from '../components/Homesec5'
import PDSec5 from '../components/Packagedetail/PDSec5'


function PackageDetail() {
  return (
    <section className='packageWrap'>

        <Navbar2 />

      <div className="pacakageWrapCont">

        <PDSec1  />

        <PDSec2 />

        <PDSec3 />

        <Homesec5  />

        <PDSec5 />

      </div>

    </section>
  )
}

export default PackageDetail