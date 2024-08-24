import "./pd.css"
import { HEROSECTION_IMAGES } from '../../Data/PackageDetail'


function PDSec1() {
  return (
    <div className='pdsec1cont'>

       {/* left side */}
       <img src={HEROSECTION_IMAGES[0]?.img} alt="d1" className='pdsec1d1' loading='lazy' />

       {/* right sidde  */}
       <div className="pdsec1images">

         <img src={HEROSECTION_IMAGES[1]?.img} alt="d2" loading='lazy' />
         <img src={HEROSECTION_IMAGES[2]?.img} alt="d2" loading='lazy' />
         <img src={HEROSECTION_IMAGES[3]?.img} alt="d2" loading='lazy' />
         <img src={HEROSECTION_IMAGES[4]?.img} alt="d2" loading='lazy' />
       </div>
       

    </div>
  )
}

export default PDSec1