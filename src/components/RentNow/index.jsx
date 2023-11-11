import './style.css'
import { Link } from 'react-router-dom'

const RentNow = () => {
    return (
        <div className="banner py-5">
            <div className="container text-center py-5 d-flex justify-content-center align-items-center flex-column">
                <h1 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et
                    dolore magna aliqua. </p>
                <Link to={'/search-car'}>
                    <button className="btn btn-success"><b>Mulai Sewa Mobil</b></button>
                </Link>
                
            </div>
        </div>
    )
}

export default RentNow