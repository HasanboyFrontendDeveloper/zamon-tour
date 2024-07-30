import React from 'react'
import peopleIcon from '../../assets/imgs/people.svg'

import offer8 from '../../assets/imgs/offer4.jpg'
import offer7 from '../../assets/imgs/offer5.jpg'
import offer6 from '../../assets/imgs/offer6.jpg'
import offer5 from '../../assets/imgs/offer1.jpg'
import offer4 from '../../assets/imgs/offer8.jpg'
import offer3 from '../../assets/imgs/weekly1.jpg'
import offer2 from '../../assets/imgs/offer3.jpg'
import offer1 from '../../assets/imgs/offer2.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Keyboard } from 'swiper/modules';
import { useTranslation } from 'react-i18next'



const WeeklyOffers = ({ screenWidth }) => {

    const { t } = useTranslation()

    const offers = [
        { title: t('Istanbul'), price: '420', people: '234', img: offer1 },
        { title: t('Dubai'), price: '700', people: '300', img: offer2 },
        { title: t('Antalya'), price: '999', people: '500', img: offer3 },
        { title: t('Sharm El-Sheikh'), price: '800', people: '200', img: offer4 },
        { title: t('USA'), price: ' ', people: '434', img: offer5 },
        { title: t('England'), price: ' ', people: '234', img: offer6 },
        { title: t('Canada'), price: ' ', people: '345', img: offer7 },
        { title: t('European Union'), price: ' ', people: '345', img: offer8 },
    ];

    return (
        <section id='tours' className=' my-20 border-b  '>
            <div className=" xm:w-[320px] xs:w-[420px] sm:w-[700px] md:w-[1000px] lg:w-[1200px] xl:w-[1320px] mx-auto ">

                <div className="text-center mb-20">
                    <h1 className='font-bold text-3xl sx:w-[380px] '>{t('weekly1')}</h1>
                    <p className='lg:w-[680px] sx:w-[380px] text-gray-400 mx-auto pt-5 ' >{t('weekly2')}</p>
                </div>

                <div className="flex">

                    <Swiper
                        slidesPerView={screenWidth <= 780 ? 1 : screenWidth >= 1060 ? 3 : 2}
                        spaceBetween={30}
                        navigation={true}
                        loop={true}
                        keyboard={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation, Keyboard]}
                        className="mySwiper"
                    >

                        {offers.map(item => (
                            < SwiperSlide key={item.title} >
                                <div className="relative xm:w-[280px] md:w-[320px] lg:w-[400px] mb-28 xs:mx-auto ">
                                    <div className="">
                                        <img src={item.img} alt="slider" className='rounded-l-3xl md:max-h-[360px] md:max-w-[420px] xm:max-w-[200px] ' />
                                    </div>
                                    <div className=" py-4 px-5 bg-white z-10 absolute top-16 right-1 shadow-2xl rounded-2xl ">
                                        <div className="flex justify-between border-b pb-5 ">

                                            <div className="">
                                                <h1 className='xm:text-xm md:text-xl font-bold '>{t(item.title)}</h1>
                                                <p className='text-gray-500 xm:text-sm '><img src={peopleIcon} alt="people" className='inline' /> {item.people} {t('offer1')}</p>
                                            </div>

                                            <div className="">
                                                <h1 className='md:text-2xl xm:text-xl font-bold text-primary '>${item.price}</h1>
                                                <h1 className='text-gray-500 xm:text-sm '>/{t('offer2')}</h1>
                                            </div>

                                        </div>

                                        <h1 className='my-3 md:text-xl xm:text-sm '>{t('offer title')} </h1>
                                        <ul className="">
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px] '>
                                                <i className="fa-solid fa-taxi"></i>
                                                {' '}
                                                {t('offer3')}
                                            </li>
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px] '>
                                                <i className="fa-solid fa-plane"></i> {t('offer4')}
                                            </li>
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px] '>
                                                <i className="fa-solid fa-building"></i> {t('offer5')}
                                            </li>

                                        </ul>

                                        <div className="flex justify-center">
                                            <a href="#contact" className='bg-primary text-white xm:text-xs md:text-XL px-7 py-3 rounded-full inline-block my-5 mx-auto ' >{t('Make A Reservation')}</a>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>

        </section >
    )
}

export default WeeklyOffers