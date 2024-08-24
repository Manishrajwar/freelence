import swipbg from "../assets/swipebg.png";
import bannerimg from "../assets/bannerimg.png"
import img from "../assets/Img.png";
import frame from '../assets/Frame.png';
import frame1 from '../assets/Frame2.png';
import frame2 from '../assets/Frame3.png';
import frame3 from '../assets/Frame4.png';
import img1 from "../assets/unsplash_S9xHSYaLmUo.png";
import frame4 from '../assets/Frame5.png';
import card1 from "../assets/Card 1.png";



// =========== Home.jsx file data ===========
export const HEADER_DATA = {
    heading:"Explore Andaman Tourism Packages with Maven Andaman" , 
    para:"Get the best of the Andaman Islands with Maven Andaman. Maven Andaman offers you a priority client support and service, which makes sure that you have the best experience of the Andaman Islands." ,
    buttonText:"Book With Us"
}



// ============= Homesec2.jsx file data ============

export const PACKAGE_DATA = {
   tag:"Planning on traveling to Andaman & Nicobar Islands?" , 
   heading:"See The Best Andaman & Nicobar Tourism Packages" , 

   sliderDetails:[
   {
    img:swipbg , 
    title:"See the best of Neil Islands" , 
    daysNight:"6 Nights, 7 Days"
   } , 
   {
    img:swipbg , 
    title:"See the best of Chidiya Tapu" , 
    daysNight:"6 Nights, 7 days"
   } , 
   {
    img:swipbg , 
    title:"See the best of Ross Island" , 
    daysNight:"5 Nights, 6 days"
   } , 
   ]

}


// ============= Homesec3.jsx file data ============

export const BANNER_DETAIL = {
    bannerImg: img , 
    exclusiveOfferText:"Exclusive offer", 
    offerText:"Book your Andaman Islands Tour today with Maven Andaman" , 
    // for small screen image 
     specialOfferImg:bannerimg
}


// ============Homesec4.jsx file data ==============

export const TOP_DESTINATIONS = {
    image1:frame , 
    title1:"Cellular Jail" ,

    image2:frame1 , 
    title2:"Corbyn's Cove Beach" , 

    image3:frame2 , 
    title3:"Radhanagar Beach" , 

    image4:frame3 , 
    title4:"Kalapathar Beach" ,

    image5:frame4 , 
    title5:"Ross Island"
}



// ============= Homesec5.jsx file data ===============

export const TOP_PACKAGES = {
    heading:"Top Andaman Tour Packages" , 
    sliderData:[
        {
            img:img1 , 
            dayNight:"6 Nights & 7 Days" , 
            title:"Package For 2 Adults + 1 Child" ,
            price:"$1000"
        } , 
        {
            img:img1 , 
            dayNight:"5 Nights & 6 Days" , 
            title:"Package For 2 Adults + 2 Child" ,
            price:"$1000"
        } ,  
        {
            img:img1 , 
            dayNight:"4 Nights & 5 Days" , 
            title:"Package For 6 Adults" ,
            price:"$1000"
        } , 
        {
            img:img1 , 
            dayNight:"5 Nights & 6 Days" , 
            title:"Package For 2 Adults" ,
            price:"$1000"
        } , 
       
        {
            img:img1 , 
            dayNight:"6 Nights & 7 Days" , 
            title:"Package For 4 Adults" ,
            price:"$1000"
        } , 
        {
            img:img1 , 
            dayNight:"5 Nights & 6 Days" , 
            title:"Package for 2 Adults + 2 Children" ,
            price:"$1000"
        } , 
       
    ]
}



// ============== waterActivity.jsx file data ============

export const WATER_ACTIVITY = {
    heading:"Top Water Sports Activities" , 
    sliderData:[
        {
            img: card1 , 
            name:"Kayak Ride" , 
            destiny:"Havelock Island, Andaman"
        } ,
        {
            img: card1 , 
            name:"Scuba Diving" , 
            destiny:"Barracuda City, Andaman"
        } ,
        {
            img: card1 , 
            name:"Snorkelling" , 
            destiny:"Elephanta Beach, Andaman"
        } ,
    ]
}


// ==================== Testimonial.jsx file data ===========

export const TESTIMONIAL = {
    tag:"What Our Clients Say About Maven Andaman" , 
    heading:"Client Testimonials" , 
    reviews:[
        {
            review:"Amazing experience with Maven Andaman🤩 The owner is very helpful and provides a budget friendly itinerary too", 
            name:"Kushagra Srivastava"
        }, 
        {
            review:"Visited Andaman with the Mave Andaman tour package and the experience was seamless. From tickets to cabs everything was managed very well. Would recommend it to everyone. ", 
            name:"Harshita Joshi"
        }, 
        {
            review:"The most professional travel agent in Port Blair. The packages are very much affordable and the arrangements are superb. Highly recommended ", 
            name:"Vishnu Prasad"
        }, 
    ]
}

// ==================== frequentquestion.jsx file data =========

export const FREQUENT_QUESTIONS = [
    {
        ques:"What is the best time to visit the Andaman Islands?" , 
      ans:"One always wishes to visit Andaman during the most pleasant months to enjoy each bit of it. The best time to visit the Andaman Islands is during the months of November to April. During this time, the weather is pleasant and favours all water-activities."
    },
    {
        ques:"Can I customise my Andaman Tour Package?" , 
      ans:"With Maven Adventures, you need not worry about paying extra. You can get a customised Andaman Tour Package as well. Just make sure to contact us (add link to contact page) and let us know what customisation would you like in your Andaman Tour Package"
    },
    {
        ques:"How is the mobile network and connectivity in the Andaman Islands?" , 
      ans:"Mobile network and connectivity in the Andaman Islands can be spotty and inconsistent. In Port Blair, the capital, and some  popular tourist spots like Havelock Island, you'll generally find decent coverage, especially with major Indian telecom providers like BSNL, Airtel, and Jio. However, as you move to more remote areas or smaller islands, the signal can weaken, and internet speeds may drop significantly. It's a good idea to plan for limited connectivity, especially if you're heading to less populated places."
    },
    {
        ques:"How do I book my Andaman Tour Package?" , 
      ans:"Here at Maven Adventures, we have made the booking procedure quite simple. All you need to do is select a tour package that suits your budget and your needs and click on the book now button. Our in-house team will be there for you and guide you through any issues while booking."
    },
    {
        ques:"What are the must-visit locations in the Andaman Islands?" , 
      ans:"The must-visit locations if you are travelling to the Andaman Islands include Cellular Jail, Radhanagar Beach, Ross Island, Neil Island, and Havelock Island. If you are travelling to the Andaman Islands, make sure to visit these places to have the best experience of the place."
    },
   
  ]