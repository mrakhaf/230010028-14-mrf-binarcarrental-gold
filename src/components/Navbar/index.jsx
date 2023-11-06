import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a href="#"><div className="logo"></div></a>
                <button className="btn btn-success d-md-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#our-services">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#why-us">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar