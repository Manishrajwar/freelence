import Navbar2 from "../Common/Navbar2"
import "./about.css"
import img1 from '../assets/Rectangle1.png'


function About() {
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

            <button className="contcustn"><span>Contact Us</span></button>

        </div>

    </div>
  )
}

export default About