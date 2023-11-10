import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Search from "../../components/Search"
import ShowCar from "../../components/ShowCars"
import './style.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function SearchCar() {
    const buttonBanner = false

    const [cars, setCars] = useState([])
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [isRented, setIsRented] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    useEffect(() => {
        getCars(name, category, isRented, minPrice, maxPrice)
    }, [])

    const getCars = (carName, carCategory, carIsRented, carMinPrice, carMaxPrice) => {
        axios.get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${carName}&category=${carCategory}&isRented=${carIsRented}&minPrice=${carMinPrice}&maxPrice=${carMaxPrice}&page=1&pageSize=10`)
        .then(res => {
            setCars(res.data.cars)
        })
        .catch(err => console.log(err))
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleIsRented = (e) => {
        setIsRented(e.target.value)
    }
    const handlePrice = (e) => {
        if (e.target.value == "1") {
            setMinPrice("100000")
            setMaxPrice("200000")
        } else if (e.target.value == "2") {
            setMinPrice("200000")
            setMaxPrice("400000")
        } else if (e.target.value == "3") {
            setMinPrice("400000")
            setMaxPrice("600000")
        }
    }

    const handleSearch = () => {
        getCars(name, category, isRented, minPrice, maxPrice)
    }

    return (
        <>
            <Navbar/>
            <Banner button={buttonBanner}/>
            <Search 
                handleName={handleName}
                handleCategory={handleCategory}
                handleIsRented={handleIsRented}
                handlePrice={handlePrice}
                handleSearch={handleSearch}
            />
            
            <div className="show-car py-5 my-3" id="show-car">
                <div className="container py-5">
                    <div className="row">
                    {
                        cars.map((car, key) => (
                            
                            <div className="col-12 col-sm-6 col-md-3 my-2" key={key}>
                                <div className="card p-3">
                                    <img className="card-img-top" src={car.image} alt="Card image cap"/>
                                    <div className="card-body">
                                        <div className="text-card mb-3">
                                            <p className="card-text">{car.name}</p>
                                            <h5 className="card-title">Rp. {car.price} / Hari</h5>
                                            <h5 className="card-subtitle">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                                        </div>
                                        
                                        <Link to={`/detail/${car.id}`}>
                                            <p className="btn btn-success">Detail</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                                        
                        ))
                                    
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}