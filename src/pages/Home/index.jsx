import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import OurServices from "../../components/OurServices"
import WhyUs from "../../components/WhyUs"
import Testimonial from "../../components/Testimonial"
import RentNow from "../../components/RentNow"
import FAQ from "../../components/FAQ"
import Footer from "../../components/Footer"
import { useEffect, useState } from "react"

export default function Home() {
    // const [buttonBanner, setButtonBannter] = useState(false)

    // useEffect(() => {
    //     setButtonBannter(true)
    // })
    const buttonBanner = true

    return (
        <>
            <Navbar/>
            <Banner button={buttonBanner}/>
            <OurServices/>
            <WhyUs/>
            <Testimonial/>
            <RentNow/>
            <FAQ/>
            <Footer/>
        </>
    )
}