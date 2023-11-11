import './style.css'

const ShowCar = ({cars}) => {

    console.log(cars)
    return (
        <>
        {/* <div className="show-car py-5 my-3" id="show-car">
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
            </div> */}
        </>
    )
}

export default ShowCar