import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.png';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar: AVTR1,
  name: 'Emmanuel Akinsiku',
  review: "Elijah has been the best designer I’ve ever worked with. He redesigned our website and worked on a variety of projects, and he consistently creates top-quality designs which are stunningly smart and beautiful in every detail. Plus, he is always on time and meet deadlines. He’s also an absolute pleasure to work with — creative, intelligent, and incredibly productive."
},
{
  avatar: AVTR2,
  name: 'Paybuymax Tech',
  review: "We worked with Elijah on designing our Fintech web app from scratch and we are delighted with the results. The UI designs he crafted are top-notch, and the design system he integrated allows for straightforward fixes and bulk updates throughout almost every area of the app. I'm looking forward to partner up with him on upcoming projects. Highly recommended!"
},
{
  avatar: AVTR3,
  name: 'IDev Turkiye',
  review: "Elijah is a UI rockstar with amazing attention to detail. He designs high-quality solutions that work flawlessly and look beautiful. Best of all, his designs are reliable—like the saying goes, they can take a lickin’ and keep on tickin’."
},
{
  avatar: AVTR4,
  name: 'Charles Technology Africa',
  review: "After working with Elijah for more than 6 months I can say that I’m very pleased with his UI/UX design solutions. He is an efficient and reliable team player who produces high quality work and I recommend him highly."
}
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 style={{color: '#1f1f38'}}>Review from clients</h5>
      <h2 style={{color: '#1f1f38'}}>Testimonials</h2>
      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {data.map(({avatar, name, review}, index) => {
          return (
          <SwiperSlide className="testimonial" key={index}>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
