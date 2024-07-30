
import './App.css'
import { useTranslation } from 'react-i18next'
import { BestLocations, Destinations, Footer, Header, Navbar, NavbarMobile, Reservation, VisaSuppport, WeeklyOffers } from './components'
import { useEffect, useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const { t, i18n } = useTranslation()
  const [screenWidth, setScreenWidth] = useState(0)


  const changleLenguage = (e) => {
    const selectedLen = e.target.value
    i18n.changeLanguage(selectedLen)
  }

  const language = localStorage.getItem('i18nextLng') || 'uz'

  const handleWidth = () => {
    setScreenWidth(window.innerWidth)
    console.log(window.innerWidth);
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleWidth)

    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }, [])

  let a = ''

  console.log(a)

  return (
    <>

      <Navbar />
      <NavbarMobile />
      <Header />
      <WeeklyOffers screenWidth={screenWidth} />
      <VisaSuppport screenWidth={screenWidth} />

      <Destinations />
      <BestLocations screenWidth={screenWidth} />
      <Reservation />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App




{/* <select name="lng" id="lng" value={language} onChange={changleLenguage}>
      <option value="uz">Uzbek</option>
      <option value="ru">Russian</option>
      <option value="eng">English</option>
    </select>
      <h1>{t('moshina')}</h1>
      <h1>{t('kamaz')}</h1> */}