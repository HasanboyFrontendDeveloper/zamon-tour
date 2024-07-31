import personIcon from '../../assets/imgs/person.svg'
import globeIcon from '../../assets/imgs/globe.svg'
import houseIcon from '../../assets/imgs/house.svg'

import istanbul from '../../assets/imgs/istanbul.jpg'
import antalya from '../../assets/imgs/antalya.jpg'
import dubai from '../../assets/imgs/dubai.jpg'
import sharm from '../../assets/imgs/sharm.jpg'

import './Header.css'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const sliders = [
    {
        title: 'Istanbul',
        population: '44.48',
        territory: '275.400',
        price: '946.000',
        img: istanbul,
        id: 1,
    },
    {
        title: 'Antalya',
        population: '8.66',
        territory: '41.290',
        price: '1.100.200',
        img: antalya,
        id: 2,
    },
    {
        title: 'Dubai',
        population: '67.41',
        territory: '551.500',
        price: '425.600',
        img: dubai,
        id: 3,
    },
    {
        title: 'Sharm El-Sheikh',
        population: '69.86',
        territory: '513.120 ',
        price: '165.450',
        img: sharm,
        id: 4,
    },

]

const Header = () => {
    const [activeBanner, setActiveBanner] = useState(1)

    const { t } = useTranslation()



    useEffect(() => {

        const slider = setInterval(() => {
            if (activeBanner >= 4) {
                setActiveBanner(1)
            } else {
                setActiveBanner(activeBanner + 1)
            }

        }, 5000)

        return () => {
            clearInterval(slider)
        }
    }, [activeBanner])


    return (
        <header id='home' className="xm:w-full bg-black pt-[78px] " >
            {sliders.map(item => (

                <div key={item.id} className={`slider ${activeBanner === item.id ? 'block' : 'hidden'} bg-cover bg-center `} style={{ '--img': `url(${item.img})` }}>
                    <div className=" xm:w-[320px] xs:w-[400px] sm:w-[700px] md:w-[900px] w-[1320px] mx-auto pb-10">
                        <div className="text-center xm:py-20 sm:py-32">

                            <h2 className='text-white text-xl '>{t('header1')}</h2>
                            <h1 className='pt-5 pb-10 text-white text-4xl '>{t(item.title)}</h1>
                            <a href="#contacts" className="bg-primary text-white px-5 py-3 rounded-full hover:bg-white hover:text-primary transition-[1s] ">{t("Go There")} </a>

                        </div>

                        <div className=" xm:grid xm:grid-cols-2 sm:flex sm:items-center sm:justify-between gap-4 bg-white xm:rounded-2xl sm:rounded-full py-5 xm:px-5 md:px-10 ">


                            <div className="flex gap-5 items-center">
                                <div className="border border-primary rounded-full p-3 ">
                                    <img src={personIcon} alt="person" className='w-12 h-12 xm:w-5 xm:h-5 ' />
                                </div>
                                <div className="xm:w-16 xs:w-24">
                                    <h3 className='xm:text-xs'>{t('Population')}:</h3>
                                    <span className='text-primary xm:text-sm md:text-xl font-bold '>{item.population} M</span>
                                </div>
                            </div>

                            <div className="flex gap-5 items-center">
                                <div className="border border-primary rounded-full p-3 ">
                                    <img src={globeIcon} alt="person" className='w-12 h-12 xm:w-5 xm:h-5 ' />
                                </div>
                                <div className="xm:w-16 xs:w-24">
                                    <h3 className='xm:text-xs'>{t('Territory')}:</h3>
                                    <span className='text-primary xm:text-sm md:text-xl font-bold '>{item.territory}  KM2</span>
                                </div>
                            </div>



                            <div className="flex gap-5 items-center">
                                <div className="border border-primary rounded-full p-3 ">
                                    <img src={houseIcon} alt="person" className='w-12 h-12 xm:w-5 xm:h-5 ' />
                                </div>
                                <div className="xm:w-16 xs:w-24">
                                    <h3 className='xm:text-xs'>{t('AVG Price')}:</h3>
                                    <span className='text-primary xm:text-sm md:text-xl font-bold '>${item.price}</span>
                                </div>
                            </div>

                            <div className="">

                                <a href="#contacts" className='bg-primary text-white xm:text-sm md:text-base xm:px-3 xm:py-2 md:px-5 md:py-3 rounded-full text-center hover:opacity-80 transition '>{t('Explore More')}</a>
                            </div>


                        </div>

                        <div className="flex justify-center gap-5 mt-7 ">
                            {sliders.map(c => (
                                <div key={c.id} className="w-[200px] " onClick={() => setActiveBanner(c.id)} >
                                    <h1 className={` ${activeBanner === c.id ? 'active text-primary ' : 'text-white'} slider-num  hover:text-primary transition duration-150 text-center before:rounded-3xl`} >{c.id}</h1>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>


            ))}
        </header >
    )
}

export default Header