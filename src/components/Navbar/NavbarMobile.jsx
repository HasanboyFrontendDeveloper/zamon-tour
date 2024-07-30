import React, { useState } from 'react'
import logo from '../../assets/imgs/logo.svg'
import teleIcon from '../../assets/imgs/telegramIcon.svg'
import instaIcon from '../../assets/imgs/instaIcon.svg'
import { useTranslation } from 'react-i18next'

import './Navbar.css'

const navbarLinks = ['home', 'about', 'tours', 'contacts']

const NavbarMobile = () => {
    const [activeNav, setActiveNav] = useState('home')
    const [activeMenu, setActiveMenu] = useState("false")

    const { t, i18n } = useTranslation()

    const changleLenguage = (val) => {
        i18n.changeLanguage(val)
    }

    

    return (
        <div className="bg-primary w-full fixed top-0 z-10 md:hidden block ">
            <div className='w-[80%] mx-auto  flex justify-between items-center py-4 text-white '>
                <a href='./' className="">

                    <img src={logo} alt="Logo" className='w-[180px] ' />
                </a>


                <div className="relative lg:hidden w-5 h-5 ">

                    <i className={`fa-solid fa-bars ${activeMenu === "true" ? 'hidden' : 'block'} text-xl transition duration-500 `} onClick={() => setActiveMenu("true")} ></i>
                    <i className={`fa-solid fa-xmark ${activeMenu === "false" ? 'hidden' : 'block'} text-xl transition duration-500 `} onClick={() => setActiveMenu("false")} ></i>
                </div>


            </div>

            
            <div className={`bg-primary py-10 px-5 max-w-[300px] w-[200px] opacity-80 fixed right-[-200px] ${activeMenu === "true" && 'show-sidebar'} ${activeMenu === "false" && 'hide-sidebar' } `}>
                    <div className=" flex flex-col items-center gap-3 text-white ">
                        {navbarLinks.map(item => (
                            <a href={`#${item}`} key={item} className={`nav ${item === activeNav && 'active'} `} onClick={() => setActiveNav(item)} >{t(item)}</a>

                        ))}
                        <h4 className='cursor-pointer hover:text-black transition ' onClick={() => changleLenguage('uz')} >UZ</h4>
                        <h4 className='cursor-pointer hover:text-black transition ' onClick={() => changleLenguage('eng')} >ENG</h4>
                        <h4 className='cursor-pointer hover:text-black transition ' onClick={() => changleLenguage('ru')} >RU</h4>

                        <a href="https://t.me/zamonbiznestour" target='_blank' className='pt-1 ' >
                            <img src={teleIcon} alt="Telegram" className='w-8 cursor-pointer' />
                        </a>
                        <a href="https://www.instagram.com/zamontour" target='_blank' className='pt-1 '>
                            <img src={instaIcon} alt="Instagram" className='w-8 cursor-pointer ' />
                        </a>
                    </div>

                </div>

        </div >
    )
}

export default NavbarMobile