import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import CarDetail from "../../components/CarDetail"
import Search from "../../components/Search"

const DetailCar = () => {
 return(
    <>
        <Navbar/>
        <Banner/>
        <Search isDetail={true} isSubmit={true}/>
        <CarDetail/>
        <Footer/>
    </>
 )
}

export default DetailCar