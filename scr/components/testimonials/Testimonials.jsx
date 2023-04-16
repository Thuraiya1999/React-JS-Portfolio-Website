import React from 'react'
import '.testimonials.css'
import AVTR1 from '../../assest/avatar1.jpg'
import AVTR2 from '../../assest/avatar2.jpg'
import AVTR3 from '../../assest/avatar3.jpg'
import AVTR4 from '../../assest/avatar4.jpg'


 import {pagination} from 'swisper';

 import { swisper, swisperSlide }from 'swisper/react';

 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/pagination';

const data = [
    {
     avatar= Avt1;
     name= 'Ali Ahmed';
     review= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Magni earum tempora in sed culpa inventore iure fugiat nam blanditiis numquam suscipit hic accusamus, 
     delectus doloremque, corporis architecto laboriosam quos aliquid!'
    },
    {
     avatar= Avt2,
     name= 'Mohammed Ali',
     review= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Magni earum tempora in sed culpa inventore iure fugiat nam blanditiis numquam suscipit hic accusamus, 
     delectus doloremque, corporis architecto laboriosam quos aliquid!'
    },
    {
     avatar= Avt3,
     name= 'Jone',
     review= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Magni earum tempora in sed culpa inventore iure fugiat nam blanditiis numquam suscipit hic accusamus, 
     delectus doloremque, corporis architecto laboriosam quos aliquid!'
    },
    {
     avatar= Avt4,
     name= 'Adam',
     review= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Magni earum tempora in sed culpa inventore iure fugiat nam blanditiis numquam suscipit hic accusamus, 
     delectus doloremque, corporis architecto laboriosam quos aliquid!'
    },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from my clients</h5>
        <h3>Testimonials</h3>

        <Swiper className="container testimonials__container" 
        // install swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
          {
            data.map(({avatar, name, review}, index) => {
                return (
                    <SwiperSlide key ={index} className="testimonials">
                    <div className="client__avatar">
                     <img src={avatar}/>
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className='client__review'>{review}</small>
                    </SwiperSlide>
                    )
                })
              }
        </Swiper>
    </section>
  )
}

export default Testimonials

