import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import OurServices from "../../components/OurServices"
import WhyUs from "../../components/WhyUs"
import Testimonial from "../../components/Testimonial"
import RentNow from "../../components/RentNow"
import FAQ from "../../components/FAQ"
import Footer from "../../components/Footer"
import auth from "../../auth/auth.js"

console.log(await auth())

export default function Home() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <OurServices/>
            <WhyUs/>
            <Testimonial/>
            <RentNow/>
            <FAQ/>
            <Footer/>
        </>
    )
}