import axios from 'axios';
import reservation from '../../assets/imgs/reservation.jpg'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Reservation = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [values, setValues] = useState({
        fullname: '',
        phone: '',
        guests: '',
        date: '',
        destination: 'Antalya',
        visaSupport: 'Country',
    })

    const { t } = useTranslation()

    const submitHandler = (e) => {
        e.preventDefault()

        setIsLoading(true)

        const token = '7034603966:AAEW8OfgJgSgbhDW2yiWYapaaepe6tAcjI4';
        const chat_id = 1077786876
        const url = `https://api.telegram.org/bot${token}/sendMessage`

        const message = `
        Fullname: ${values.fullname};
        Phone: ${values.phone};
        Guests: ${values.guests};
        Date: ${values.date};
        Destination: ${values.destination};
        Visa Support: ${values.visaSupport};
      `

        axios({
            url: url,
            method: 'POST',
            data: {
                chat_id: chat_id,
                text: message
            }
        })
            .then(() => {
                setValues({
                    fullname: '',
                    phone: '',
                    guests: '',
                    date: '',
                    destination: 'Antalya',
                    visaSupport: 'Country',
                })
                toast.success('Send Successfully', {
                    theme: 'light',
                })
            })

            .catch(err => {
                console.error("Yuborishda hatolik", err),
                    toast.error('Somesthing is wrong', {
                        theme: 'dark',
                    })

            }).finally(() => setIsLoading(false))
    }

    const inputHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='mb-40'>
            <div className=" py-52  " style={{ background: `url(${reservation})` }}>
                <div className="xm:w-[320px] xs:w-[420px] ss:w-[550px] sm:w-[700px] md:w-[1000px] mx-auto flex flex-col justify-center items-center text-center gap-5">

                    <h1 className='text-white text-xl font-semibold '>{t("Book Prefered Deal Here")}</h1>
                    <span className='border-b-[3px] border-gray-400 w-20'></span>
                    <h2 className='text-white text-[50px] font-bold'>{t("Make Your Reservation")}</h2>
                    <a href="#contacts" className="bg-white text-primary px-5 py-3 rounded-full hover:bg-primary hover:text-white transition-[1s] ">{t("Discover More")}</a>
                </div>
            </div>

            <div className="xm:w-[320px] xs:w-[420px] ss:w-[550px] sm:w-[700px] md:w-[1000px] lg:w-[1200px] xl:w-[1320px] mx-auto mt-[-100px] ">
                <div className="mx-auto flex flex-col ss:flex-row ss:flex-wrap gap-5 ">

                    <div className="shadow-xl bg-white rounded-3xl text-center w-full md:w-[32%] ss:w-[45%] py-9 ">
                        <i className="fa-solid fa-phone text-2xl text-primary px-5 py-4 rounded-full bg-gray-200 "></i>
                        <h2 className='font-bold text-xl py-2 '>{t("Make a Phone Call")}</h2>
                        <a href="tel:+998 99 299 99 96" className='text-primary' >+998 99 299 99 96</a>
                    </div>

                    <div className="shadow-xl bg-white rounded-3xl text-center w-full md:w-[32%] ss:w-[45%]  py-9 ">
                        <i className="fa-solid fa-envelope text-2xl text-primary px-5 py-4 rounded-full bg-gray-200 "></i>
                        <h2 className='font-bold text-xl py-2 '>{t("Contact Us via Email")}</h2>
                        <a href="mailto:zamonbiznestour@mail.ru " className='text-primary'>zamonbiznestour@mail.ru </a>
                    </div>

                    <div className="shadow-xl bg-white rounded-3xl text-center w-full md:w-[32%] ss:w-[45%]  py-9 ">
                        <i className="fa-solid fa-location-dot text-2xl text-primary px-5 py-4 rounded-full bg-gray-200 "></i>
                        <h2 className='font-bold text-xl py-2 '>{t("Visit Our Offices")}</h2>
                        <a href="./" className='text-primary'> 15/25, Chilanzar - 9, Tashkent city </a>
                    </div>


                </div>
            </div>

            <div className="xm:w-[320px] xs:w-[420px] ss:w-[550px] sm:w-[700px] md:w-[1000px] lg:w-[1200px] xl:w-[1320px] mx-auto my-20 bg-gray-100 rounded-3xl " id='contacts' >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5363.450922036045!2d69.199668!3d41.289032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2sChilanzar-25%2C%20100152%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1721564367937!5m2!1sen!2sus"
                    frameborder="0"
                    className='w-full h-[450px] rounded-t-3xl pb-5 '
                ></iframe>

                <h1 className='text-center font-bold text-xl xs:text-2xl ss:text-3xl py-5 ' ><span className='text-primary'>{t("reservation.title.1")}</span> {t("reservation.title.2")} <span className='text-primary'>{t("reservation.title.3")}</span> {t("reservation.title.4")} <span className='text-primary'>{t("reservation.title.5")}</span></h1>
                <form onSubmit={submitHandler} className='ss:w-[60%] w-[90%] mx-auto pt-5 pb-10 '>
                    <div className="flex flex-wrap gap-5 ">

                        <label className='text-gray-400 w-full md:w-[48%] '>
                            {t('reservation.name')}
                            <input
                                type="text"
                                id='fullname'
                                name='fullname'
                                className='outline-primary w-full border-2 text-primary rounded-full px-4 py-1 capitalize  '
                                placeholder='Ex. John Smithee'
                                onChange={inputHandler}
                                value={values.fullname}
                                required
                            />
                        </label>
                        <label className='text-gray-400 w-full md:w-[48%]'>
                            {t('reservation.phone')}
                            <input
                                className='outline-primary w-full text-primary border-2 rounded-full px-4 py-1 capitalize  '
                                type="tel"
                                id='phone'
                                name='phone'
                                placeholder='Ex. +998 99 999 99 99'
                                onChange={inputHandler}
                                value={values.phone}
                                required
                            />
                        </label>
                        <label className='text-gray-400 w-full md:w-[48%]'>
                            {t('reservation.guests')}
                            <select
                                name="guests"
                                id="guests"
                                className='w-full rounded-full outline-primary px-4 py-1 text-primary '
                                onChange={inputHandler}
                                value={values.guests}
                                required
                            >
                                <option value="example" className='text-primary' >ex. 3 or 4 or 5</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4+">4+</option>
                            </select>
                        </label>
                        <label className='text-gray-400 w-full md:w-[48%]'>
                            {t('reservation.date')}
                            <input
                                className='outline-primary text-primary w-full border-2 rounded-full px-4 py-1  '
                                type="date"
                                name="date"
                                id=""
                                placeholder='mm/dd/yyyy'
                                onChange={inputHandler}
                                value={values.date}
                                required
                            />

                        </label>

                    </div>


                    <label className='text-gray-400 py-5 '>
                        {t('reservation.destination')}
                        <select
                            name="destination"
                            id="destination"
                            className='w-full rounded-full outline-primary px-4 py-1 my-2  text-primary '
                            onChange={inputHandler}
                            value={values.destination}
                            required
                        >
                            <option value="antalya" className='capitalize text-primary'>{t('Antalya')}</option>
                            <option value="istanbul" className='capitalize text-primary'>{t('Istanbul')}</option>
                            <option value="dubai" className='capitalize text-primary'>{t('Dubai')}</option>
                            <option value="sharm el-sheikh" className='capitalize text-primary'>{t('Sharm El-Sheikh')}</option>
                            <option value="kuala lampur" className='capitalize text-primary'>{t('Kuala Lampur')}</option>
                            <option value="canada" className='capitalize text-primary'>{t('Canada')}</option>
                            <option value="england" className='capitalize text-primary'>{t('England')}</option>
                        </select>
                    </label>


                    <label className='text-gray-400 py-5 '>
                        {t('reservation.visa')}
                        <select
                            name="visaSupport"
                            id="visaSupport"
                            className='w-full rounded-full outline-primary px-4 py-1 my-2 text-primary capitalize '
                            onChange={inputHandler}
                            value={values.visaSupport}
                            required
                        >
                            <option value="country" className='capitalize text-primary'>country</option>
                            <option value="usa" className='uppercase text-primary'>usa</option>
                            <option value="europa" className='capitalize text-primary'>europa</option>
                            <option value="england" className='capitalize text-primary'>england</option>
                            <option value="japan" className='capitalize text-primary'>japan</option>
                            <option value="oman" className='capitalize text-primary'>oman</option>
                            <option value="saudi arabia" className='capitalize text-primary'>saudi arabia</option>
                            <option value="india" className='capitalize text-primary'>india</option>
                            <option value="china" className='capitalize text-primary'>china</option>
                            <option value="hong kong" className='capitalize text-primary'>hong kong</option>

                        </select>
                    </label>

                    <button type='submit' disabled={isLoading} className='w-full my-4 bg-primary text-white px-5 py-3 rounded-full hover:bg-white hover:text-primary transition-[1s]'>{t('reservation.button')} </button>
                </form>
            </div>
        </div>
    )
}

export default Reservation