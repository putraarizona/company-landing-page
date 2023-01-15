import React from 'react';

import './Hero.css';

import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import img
import banner1 from '../img/bg.jpg';
import banner2 from '../img/about-bg.jpg';

// import react-icons
import { AiFillLeftCircle, AiOutlineRightCircle, AiOutlineLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const Hero = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y, Autoplay]}
			spaceBetween={0}
			slidesPerView={1}
			navigation={{
				nextEl: '.button-next-slide',
				prevEl: '.button-prev-slide',
			}}
			pagination={{ clickable: true }}
			loop={true}
			autoplay={{ delay: 2000 }}
		>
			<SwiperSlide>
				<img src={banner1} alt='' className='banner' />
				<div className='banner-text'>
					<h1>
						This is place where technology & <br />
						creativity fused into digital chemistry
					</h1>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<img src={banner2} alt='' className='banner' />
				<div className='banner-text'>
					<h1>We dont have the best but we have the greatest team</h1>
				</div>
			</SwiperSlide>

			<div className='button-next-slide'>
				<AiOutlineRightCircle className='button-next-standart' />
				<AiFillRightCircle className='button-next-on-hover' />
			</div>
			<div className='button-prev-slide'>
				<AiOutlineLeftCircle className='button-prev-standart' />
				<AiFillLeftCircle className='button-prev-on-hover' />
			</div>
		</Swiper>
	);
};

export default Hero;
