import carBanner from '../../assets/img/car.png'
import './style.css'
import { Link } from "react-router-dom"

const Banner = (props) => {
    return (
        <>
            <div className="main-section pt-md-5">
                <div className="bg-car"></div>
                <div className="container h-100 d-flex pt-md-5 fw-bold">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 tagline py-5">
                            <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            { props.button ? (
                                    <Link to={'/search-car'}>
                                        <p className="btn btn-success"><b>Mulai Sewa Mobil</b></p>
                                    </Link>
                                ) : (
                                    <p></p>
                                )
                            }
                            
                        </div>
                        <div className="col-md-6 img-car py-5">
                            <img src={carBanner} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner