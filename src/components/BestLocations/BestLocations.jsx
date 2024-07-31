import './BestLocations.css'

import dubai from '../../assets/imgs/dubai3.jpg'
import antalya from '../../assets/imgs/antalya3.jpg'
import istanbul from '../../assets/imgs/istanbul3.jpg'
import paris from '../../assets/imgs/paris.jpg'
import sharm from '../../assets/imgs/sharm.jpg'
import { useTranslation } from 'react-i18next'

const sliders = [
    {
        title: 'Dubai',
        population: '2',
        img: dubai,
        id: 1,
    },
    {
        title: 'Antalya',
        population: '3.5',
        img: antalya,
        id: 2,
    },
    {
        title: 'Istanbul',
        population: '4.1',
        img: istanbul,
        id: 3,
    },
    {
        title: 'Sharm El-Sheikh',
        population: '4',
        img: sharm,
        id: 4,
    },
    {
        title: 'Paris',
        population: '3',
        img: paris,
        id: 5,
    },
]

const BestLocations = ({ screenWidth }) => {

    const { t } = useTranslation()

    return (
        <div className="w-[95%] xs:w-[420px] sm:w-[700px] md:w-[1000px] lg:w-[1200px] xl:w-[1320px] mx-auto mt-20 mb-40">

            <div className="text-center mb-20">
                <h1 className='font-bold text-3xl sx:w-[380px] '>{t('Best Locations.title')}</h1>
                <p className='lg:w-[680px] sx:w-[380px] text-gray-400 mx-auto pt-5 ' >{t('Best Locations.desc')}</p>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-nowrap h-[400px] justify-start ">

                    {sliders.map(item => (
                        <div key={item.id} className={`${screenWidth <= 780 && `${item.id === 4 && 'hidden'} ${item.id === 5 && 'hidden'}`} `}>
                            <input type="radio" name="slide" id={item.title} defaultChecked={item.id === 1} className='hidden' />
                            <label
                                htmlFor={item.title}
                                className="card items-end bg-cover xm:rounded-2xl sm:rounded-[32px] bg-center shadow-2xl cursor-pointer flex xm:mx-1 sm:mx-3 overflow-hidden w-[60px] h-[400px] "
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    transition: '0.6s cubic-bezier(0.28, -0.03, 0, 0.99)',
                                    '--width': screenWidth >= 1060 ? '500px' : screenWidth >= 768 ? '400px' : screenWidth >= 620 ? '300px' : screenWidth >= 365 ? '220px' : '170px',

                                }} >
                                <div className="row text-white flex flex-nowrap items-center pl-[10px] pt-[10px] gap-2 ">
                                    <div className="icon bg-white text-primary ">
                                        <i className="fa-solid fa-expand"></i>
                                    </div>
                                    <div className="description">
                                        <h4 className='font-bold text-2xl '>{t(item.title)}</h4>
                                        <span>{t('Population')}: {item.population} M</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default BestLocations