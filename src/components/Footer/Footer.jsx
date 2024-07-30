import { useTranslation } from 'react-i18next'
import footerBg from '../../assets/imgs/footer.jpg'

const Footer = () => {

    const { t } = useTranslation()

    return (
        <div className=''>
            <div className="bg-cover bg-center py-20 " style={{ backgroundImage: `url(${footerBg})` }}>
                <div className="xm:w-[320px] xs:w-[420px] sm:w-[700px] md:w-[1000px] lg:w-[1150px] xl:w-[1320px] mx-auto flex md:flex-row flex-col gap-5 justify-between items-center  ">

                    <div className="text-white">

                        <h1 className=' text-3xl text-center md:text-[50px] font-bold pb-3 '>{t('footer.title')}</h1>
                        <h2 className='text-center md:text-start'>{t('footer.desc')}</h2>

                    </div>
                    <button className='bg-primary text-white border border-white px-5 py-3 rounded-full hover:bg-white hover:text-primary transition-[1s]'>{t('footer.button')}</button>
                </div>
            </div>
            <div className="bg-primary py-5">
                <p className='text-center text-white '>Copyright © 2024 <a href="#" className='transition duration-150 hover:opacity-80 ' >Zamon Business Tour. </a> All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer