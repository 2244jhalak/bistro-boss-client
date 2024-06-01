import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="my-10">
            <SectionTitle 
            heading={'testimoniaLs'}
            subHeading={'What Our Clients Say'}
            ></SectionTitle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <div>
                {
                    reviews.map(review=>
                    <SwiperSlide className="px-40 text-center space-y-3" key={review._id}>
                        
                        <p className="flex justify-center items-center">
                        <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly/>
                        </p>
                        <p>{review.details}</p>
                        <h3 className="text-yellow-600 text-3xl">{review.name}</h3>

                    </SwiperSlide>)
                }
              </div>
        
      </Swiper>

            </div>
            
        </div>
    );
};

export default Testimonials;