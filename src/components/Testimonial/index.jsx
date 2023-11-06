import './style.css'
import testiPicture1 from '../../assets/photos/img_photo_1.png'
import testiPicture2 from '../../assets/photos/img_photo_2.png'

const Testimonial = () => {
    return (
        <div className="testimonial py-5" id="testimonial">
            <div className="text-center pt-3 fw-bold">
                <h3>Testimonial</h3>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="container">
                    <div className="carousel-inner">
                        <div className="carousel-item active py-3 p-md-4">
                            <div className="card p-5">
                                <div className="card-body p-0 py-md-5">
                                    <div className="row">
                                        <div className="col-md-4 text-center text-md-end">
                                            <img src={testiPicture1}
                                                alt="" className="rounded-circle img-thumbnail"/>
                                        </div>
                                        <div className="col-md-8 text-center text-md-start">
                                            <div
                                                className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="pe-md-5 fw-bold">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                                itaque dicta nostrum
                                                laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                                reiciendis delectus aut? Quaerat, dolor.
                                            </p>
                                            <p className="">John Dee 22, Bromo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item py-3 p-md-4">
                            <div className="card p-5">
                                <div className="card-body p-0 py-md-5">
                                    <div className="row">
                                        <div className="col-md-4 text-center text-md-end">
                                            <img src={testiPicture2}
                                                alt="" className="rounded-circle img-thumbnail"/>
                                        </div>
                                        <div className="col-md-8 text-center text-md-start">
                                            <div
                                                className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="pe-md-5 fw-bold">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                                itaque dicta nostrum
                                                laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                                reiciendis delectus aut? Quaerat, dolor.
                                            </p>
                                            <p className="">John Dee, 32 Bromo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item py-3 p-md-4">
                            <div className="card p-5">
                                <div className="card-body p-0 py-md-5">
                                    <div className="row">
                                        <div className="col-md-4 text-center text-md-end">
                                            <img src={testiPicture1}
                                                alt="" className="rounded-circle img-thumbnail"/>
                                        </div>
                                        <div className="col-md-8 text-center text-md-start">
                                            <div
                                                className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill me-1"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="pe-md-5 fw-bold">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                                itaque dicta nostrum
                                                laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                                reiciendis delectus aut? Quaerat, dolor.
                                            </p>
                                            <p className="">John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <button className="carousel-control-prev position-relative d-flex justify-content-end mx-4" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <i className="bi bi-chevron-left"></i>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next position-relative d-flex justify-content-start mx-4" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <i className="bi bi-chevron-right"></i>
                        <span className="visually-hidden ">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial