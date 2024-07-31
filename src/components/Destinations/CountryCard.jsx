import { useTranslation } from 'react-i18next'
import train from '../../assets/imgs/train.jpg'

const CountryCard = ({ item, isCountry = true }) => {

    const { t } = useTranslation()

    return (
        <div className="sm:flex w-full gap-5 border-b py-10 ">

            <div className="sm:w-[30%] xm:my-5 ">
                <img src={item?.img} alt="country" className=' rounded-3xl ' />
            </div>

            <div className="sm:w-[60%] ">
                <div className="flex justify-between items-center  ">
                    <div className=" py-2 w-[60%] ">
                        <h1 className='font-bold text-xl  '>{item?.title}</h1>
                        <span className='text-gray-400 xm:text-sm '>{item?.desc}</span>
                    </div>
                    <div className="">
                        <a href="#contacts" className='bg-primary text-white xm:text-sm md:text-base xm:px-3 xm:py-2 md:px-5 md:py-3 rounded-full text-center hover:opacity-80 transition '>{t('Explore More')}</a>
                    </div>
                </div>
                <div className="">
                    <p className='text-gray-400 pt-5 pb-2 sm:leading-8 '> {item?.paragraph}</p>
                </div>
                {isCountry && (
                    <>
                        <div className="text-gray-400 flex justify-between items-center px-5 border-y py-4  ">

                            <div className="flex gap-5 items-center xm:text-sm ">
                                <i className="fa-solid fa-user"></i>
                                <h1 className=''>{item?.population} Mil {t('offer2')}</h1>
                            </div>

                            <div className="flex gap-5 items-center  xm:text-sm  ">
                                <i className="fa-solid fa-globe"></i>
                                <h1 className=''>{item?.territory} km2</h1>
                            </div>

                            <div className="flex gap-5 items-center  xm:text-sm  ">
                                <i className="fa-solid fa-house"></i>
                                <h1 className=''>${item?.price}</h1>
                            </div>
                        </div>
                        <a href='#contacts' className=" text-primary py-5 inline-block ">
                            <h1 className=' inline pr-3'>{t('Need Directions ?')}</h1>
                            <i className="fa-solid fa-arrow-right direction cursor-pointer "></i>
                        </a>
                    </>

                )}
            </div>
        </div>
    )
}

export default CountryCard