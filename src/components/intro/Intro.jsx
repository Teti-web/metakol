import React from 'react'
import { Link} from 'react-router-dom'
import './intro.scss'
import './../../style/btnStyle.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide1 from '../../assets/slider1.webp';
import Slide2 from '../../assets/slider2.webp';
import Slide3 from '../../assets/slider3.webp';
import Slide4 from '../../assets/intro1.webp';

const Intro = (props) => {
  return (
    <section className='intro'>
      <div className='slider'>
             <Swiper
              modules={[EffectFade,Navigation, Pagination, Autoplay]}
             navigation = {true}
             pagination={{ dynamicBullets: true, }}
             autoplay={{
              delay: 3900,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
             spaceBetween={30}
             effect={"fade"}
             className='slider-container'>
                  <SwiperSlide><img src={Slide4} alt="coal"/></SwiperSlide>
                  <SwiperSlide><img src={Slide1} alt="coal"/></SwiperSlide>
                  <SwiperSlide><img src={Slide2} alt="coal"/></SwiperSlide>
                  <SwiperSlide><img src={Slide3} alt="coal"/></SwiperSlide>
                  
             </Swiper>
          </div>
         <div className=' container intro-container'>
            <div className='intro-other'>
                <h1>Metakol</h1>
                <p>{props.intro}</p>
                <div>
                   <Link className="btn btn-secondary" to="/about">{props.more}</Link>
                   <Link className="btn"to="/contact">{props.contact}</Link>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Intro