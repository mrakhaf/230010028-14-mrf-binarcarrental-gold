import imageCar from '../../assets/img/car.png'
import './style.css'

const ShowCar = () => {
    return (
        <>
        <div className="show-car py-5" id="show-car">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 my-2">
                        <div className="card p-3">
                            <img className="card-img-top" src={imageCar} alt="Card image cap"/>
                            <div className="card-body">
                                <div className="text-card mb-3">
                                    <p className="card-text">Mercedes</p>
                                    <h5 className="card-title">Rp. 500.000 / Hari</h5>
                                    <h5 className="card-subtitle">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                                </div>
                                
                                <a href="#" className="btn btn-success">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default ShowCar