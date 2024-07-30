import React, { useState } from 'react'
import logo from '../../assets/imgs/logo.svg'
import teleIcon from '../../assets/imgs/telegramIcon.svg'
import instaIcon from '../../assets/imgs/instaIcon.svg'
import { useTranslation } from 'react-i18next'

import './Navbar.css'

const navbarLinks = ['home', 'about', 'tours', 'contacts']

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('home')

    const { t, i18n } = useTranslation()

    const changleLenguage = (val) => {
        i18n.changeLanguage(val)
    }

    // const language = localStorage.getItem('i18nextLng') || 'uz'


    return (
        <div className="bg-primary w-full fixed top-0 z-10 hidden md:block ">
            <div className='lg:w-[80%] md:w-[90%] mx-auto  flex justify-between items-center py-4 text-white '>
                <a href='./' className="">

                    <img src={logo} alt="Logo" className='w-[180px] ' />
                </a>

                <div className="flex justify-between items-center gap-5 lg:w-[65%] md:w-[70%] ">
                    <div className=" gap-5 flex items-center ">
                        {navbarLinks.map(item => (
                            <a href={`#${item}`} key={item} className={`nav ${item === activeNav && 'active'} transition duration-150 `} onClick={() => setActiveNav(item)} >{t(item)}</a>

                        ))}
                    </div>


                    <div className=" flex gap-4 ">
                        <h4 className='cursor-pointer hover:text-black transition ' onClick={() => changleLenguage('French')} >UZ</h4>
                        <h4 className='cursor-pointer hover:text-black transition ' onClick={() => changleLenguage('eng')} >ENG</h4>
                        <h4 className='cursor-pointer hover:text-black transition ' onClick={() => changleLenguage('ru')} >RU</h4>

                        <a href="https://t.me/zamonbiznestour" target='_blank' className='pt-1 ' >
                            <img src={teleIcon} alt="Telegram" className='w-4 cursor-pointer' />
                        </a>
                        <a href="https://www.instagram.com/zamontour" target='_blank' className='pt-1'>
                            <img src={instaIcon} alt="Instagram" className='w-4 cursor-pointer ' />
                        </a>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar