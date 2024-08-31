import React, { useEffect, useRef, useState } from 'react';
import "./home.css";
import Navbar2 from '../Common/Navbar2';
import PDSec1 from '../components/Packagedetail/PDSec1';
import PDSec2 from '../components/Packagedetail/PDSec2';
import PDSec3 from '../components/Packagedetail/PDSec3';
import PDSec5 from '../components/Packagedetail/PDSec5';
import PdSec1Animation from '../components/Packagedetail/PdSec1Animation';
import { useNavigate, useParams } from 'react-router-dom';
import PackageSec5 from '../components/PackageSec5';
import { TOP_PACKAGES } from '../Data/Home';
import Homesec5 from '../components/Homesec5';

function PackageDetail() {
   const { id } = useParams();
   const navigate = useNavigate();

   const [packageView, setPackageView] = useState(null);


   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

   useEffect(() => {

     const packageView = TOP_PACKAGES.find((pkg) => pkg.id === parseInt(id));

     if (!packageView) {
       navigate("/");
     } else {
       setPackageView(packageView);
     }
   }, [id, navigate]);



   const [isInView2, setIsInView2] = useState(true);
   const sectionRef2 = useRef(null);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         setIsInView2(entry.isIntersecting);
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
     <section className='packageWrap'>
       <Navbar2 />

       <div className="pacakageWrapCont">
         <PDSec1 />

         <PdSec1Animation />

          <PDSec2  packageView={packageView} isInView2={isInView2} />

         <PDSec3 packageView={packageView}  sectionRef2={sectionRef2} />

         <Homesec5 />

         {/* <PDSec5 /> */}
       </div>
     </section>
   );
}

export default PackageDetail;
