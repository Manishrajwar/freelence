import Navbar2 from "../Common/Navbar2"
import "./about.css"
import img1 from '../assets/Rectangle1.png'
import { useRef, useState } from "react";
import { RIGHTSIDECONTENT2 } from "../Data/PackageDetail";
import { ImCross } from "react-icons/im";
import emailjs from '@emailjs/browser';



function About() {

  const [openform , setOpenform ] = useState(false);
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


  return (
    <div className='aboutwrap'>

        <Navbar2  />

        <div className="aboutcont">

            <h2>About us</h2>

         
            <p >ManvenAndaman, a leading travel agency in the mesmerizing islands of Andaman.  </p>
            
            <h2>Travel the world one place at a time</h2>

            <p className="paraabout">ManvenAndaman, a leading travel agency in the mesmerizing islands of Andaman, was founded by the passionate couple Prashant Ullal and Anita Singh. With a remarkable experience of 10 years in the industry, we dedicate ourselves to providing you with an unforgettable travel experience. We specialize in creating individualized itineraries that appeal to your particular interests and tastes, from immaculate beaches to beautiful coral reefs. With our extensive local knowledge and attention to detail, you can be sure that your trip to Andaman will be perfectly organized, enabling you to create lifelong memories..</p>

          

            <img src={img1} alt="img1" className="abouimg" />

            <h2>We are a team of Experts</h2>

            <p className="paraabout">Our travel specialists are committed to creating the ideal itinerary for every tourist, drawing on years of experience and in-depth knowledge of the Andaman Islands. We handle every aspect of your trip, from picking the ideal lodging to planning thrilling activities and transportation.</p>
            
            <p className="paraabout">From the moment you contact us, We will work closely with you to develop a custom itinerary that meets your needs by getting to know your interests and preferences. We take pride in our expertise, attention to detail, and dedication to going above and beyond for our clients.</p>

            <h2>Mission</h2>

            <p className="paraabout">To provide exceptional travel services and custom itineraries that satisfy each traveler’s interests and needs. We work hard to provide seamless planning, knowledgeable direction, and outstanding customer service, assuring a trouble-free experience from start to finish.</p>

            <button onClick={()=>setOpenform(true)} className="contcustn"><span>Contact Us</span></button>

        </div>




        {
  openform && 


<div className="formwrap">

<div className="formconta">

<div className={`formdetail`}>
          <h3 className='flex items-center justify-between'>
            {RIGHTSIDECONTENT2.heading}
            <ImCross onClick={()=>setOpenform(false)} fontSize={26} className='cursor-pointer' />
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
              name="message"
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

}
    </div>
  )
}

export default About