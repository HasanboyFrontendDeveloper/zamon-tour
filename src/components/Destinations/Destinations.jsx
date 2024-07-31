import React from 'react'
import CountryCard from './CountryCard'
import train from '../../assets/imgs/train.jpg'
import plane from '../../assets/imgs/plane.jpg'
import dubai from '../../assets/imgs/dubai.jpg'
import sharm from '../../assets/imgs/sharm.jpg'
import antaly2 from '../../assets/imgs/antaly2.jpg'
import istanbul2 from '../../assets/imgs/istanbul2.jpg'
import { useTranslation } from 'react-i18next'



const Destinations = () => {

    const { t } = useTranslation()

    const transports = [
        {
            title: t("Destinations.transports.railway.title"),
            desc: t("Destinations.transports.railway.desc"),
            paragraph: t("Destinations.transports.railway.text"),
            img: train,
            id: 1
        },
        {
            title: t("Destinations.transports.airplane.title"),
            desc: t("Destinations.transports.airplane.desc"),
            paragraph: t("Destinations.transports.airplane.text"),
            img: plane,
            id: 2
        }
    ]


    const countries = [
        {
            title: t("Destinations.countries.dubai.title"),
            
            desc: t("Destinations.countries.dubai.decs"),
            paragraph: t("Destinations.countries.dubai.text"),
            population: '8.66',
            territory: ' 41.290',
            price: '1.100.200',
            img: dubai,
            id: 1
        },
        {
            title: t("Destinations.countries.Antalya.title"),
            desc: t("Destinations.countries.Antalya.decs"),
            paragraph: t("Destinations.countries.Antalya.text"),
            population: '67.41',
            territory: '551.500 ',
            price: '425.600',
            img: istanbul2,
            id: 4
        },
        {
            title: t("Destinations.countries.Sharm El-Sheikh.title"),
            desc: t("Destinations.countries.Sharm El-Sheikh.decs"),
            paragraph: t("Destinations.countries.Sharm El-Sheikh.text"),
            population: '44.48',
            territory: ' 275.400 ',
            price: '946.000',
            img: antaly2,
            id: 2
        },
        {
            title: t("Destinations.countries.Istanbul.title"),
            desc: t("Destinations.countries.Istanbul.decs"),
            paragraph: t("Destinations.countries.Istanbul.text"),
            population: '67.41',
            territory: '551.500',
            price: '425.600',
            img: sharm,
            id: 3
        },
    ]

    return (
        <div id='about' className='xm:w-[320px] xs:w-[420px] sm:w-[700px] md:w-[1000px] lg:w-[1200px] xl:w-[1320px]  mx-auto'>
            <div className="">
                <h1 className='text-3xl font-bold py-5 ' >{t("Destinations.transports.title")}</h1>
                <p className='text-gray-400 lg:max-w-[40%] pb-5 '>{t("Destinations.transports.desc")}</p>

                {transports.map(item => (
                    <CountryCard isCountry={false} item={item} key={item.id} />
                ))}

                <h1 className='text-3xl font-bold py-5 ' >{t("Destinations.countries.title")}</h1>
                <p className='text-gray-400 lg:max-w-[44%] pb-5 '>{t("Destinations.countries.desc")}</p>

                {countries.map(item => (
                    <CountryCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Destinations