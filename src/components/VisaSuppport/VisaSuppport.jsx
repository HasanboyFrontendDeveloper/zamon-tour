import React from 'react'
import peopleIcon from '../../assets/imgs/people.svg'

import visa1 from '../../assets/imgs/visa1.jpg'
import visa2 from '../../assets/imgs/visa2.jpg'
import visa3 from '../../assets/imgs/visa3.jpeg'
import visa4 from '../../assets/imgs/visa4.jpg'
import visa5 from '../../assets/imgs/visa5.jpg'
import visa6 from '../../assets/imgs/visa6.jpg'
import visa7 from '../../assets/imgs/visa7.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Keyboard } from 'swiper/modules';
import { useTranslation } from 'react-i18next'



const VisaSuppport = ({ screenWidth }) => {

    const { t } = useTranslation()


    const offers = [
        {
            title: t('Visa.countries.China'),
            people: '234',
            img: visa1
        },
        {
            title: t('Visa.countries.Hong Kong'),
            people: '234',
            img: visa2
        },
        {
            title: t('Visa.countries.European'),
            people: '234',
            img: visa3
        },
        {
            title: t('Visa.countries.India'),
            people: '234',
            img: visa4
        },
        {
            title: t('Visa.countries.Japan'),
            people: '234',
            img: visa5
        },
        {
            title: t('Visa.countries.Saudi Arabia'),
            people: '234',
            img: visa6
        },
        {
            title: t('Visa.countries.Oman'),
            people: '234',
            img: visa7
        }
    ]

    return (
        <section className=' mt-20 mb-10  pb-5 border-b  '>
            <div className=" xm:w-[320px] xs:w-[420px] sm:w-[700px] md:w-[1000px] lg:w-[1200px] xl:w-[1320px] mx-auto ">

                <div className="text-center mb-20">
                    <h1 className='font-bold text-3xl '>{t('Visa.title')}</h1>
                    <p className='lg:w-[680px] text-gray-400 mx-auto pt-5 ' >{t('Visa.desc')}</p>
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
                                <div className="relative xm:w-[300px] md:w-[320px] lg:w-[350px] mb-28 pb-36 mx-auto ">
                                    <div className="">
                                        <img src={item.img} alt="slider" className='rounded-l-3xl md:max-h-[360px] md:max-w-[280px] xm:max-w-[250px] ' />
                                    </div>
                                    <div className=" py-4 px-5 bg-white z-10 absolute top-16 right-1 shadow-2xl rounded-2xl ">
                                        <div className="flex justify-between border-b pb-5 ">

                                            <div className="">
                                                <h1 className='xm:text-xm md:text-xl font-bold '>{t(item.title)}</h1>
                                                <p className='text-gray-500 xm:text-sm '><img src={peopleIcon} alt="people" className='inline' /> {item.people} {t('offer1')}</p>
                                            </div>

                                        </div>

                                        <h1 className='my-3 font-bold text-sm '>{t('Visa.Benefits.title')} </h1>
                                        <ul className="">
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px] '>
                                                <i className="fa-solid fa-tags"></i>
                                                {' '}
                                                {t('Visa.Benefits.price')}
                                            </li>
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px] '>
                                                <i className="fa-solid fa-clock"></i> {t('Visa.Benefits.time')}
                                            </li>
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px] '>
                                                <i className="fa-solid fa-check"></i> {t('Visa.Benefits.asistance')}
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

export default VisaSuppport