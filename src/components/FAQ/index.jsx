import './style.css'
import FaqDropdown from '../FaqDropdown'

const FAQ = () => {

    const faqs = [
        {
            question: "Apa saja syarat yang dibutuhkan?",
            answer: "Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta veniam!",
            collapse: "collapseButuh"
        },
        {
            question: "Berapa hari minimal sewa mobil lepas kunci?",
            answer: "Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta veniam!",
            collapse: "collapseKunci"
        },
        {
            question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
            answer: "Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta veniam!",
            collapse: "collapseSewa"
        },
        {
            question: "Apakah Ada biaya antar-jemput?",
            answer: "Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta veniam!",
            collapse: "collapseAntar"
        },
        {
            question: "Bagaimana jika terjadi kecelakaan?",
            answer: "Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta veniam!",
            collapse: "collapseCelaka"
        },
    ]

    return (
        <div className="faq py-5" id="faq">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold">Frequently Asked Question</h3>
                        <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {
                                faqs.map((faq, i) => (
                                    <FaqDropdown faq={faq} key={i}/>
                                ))
                            }
                            {/* {/* <div className="card mb-3">
                                <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                    data-bs-toggle="collapse" data-bs-target="#collapseButuh" aria-expanded="false"
                                    aria-controls="collapseButuh">
                                    <p className="fw-bold">Apa saja syarat yang dibutuhkan?</p>
                                </div>
                                <div id="collapseButuh" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus
                                            eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                            veniam!</p>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="card mb-3">
                                <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                    data-bs-toggle="collapse" data-bs-target="#collapseKunci" aria-expanded="false"
                                    aria-controls="collapseKunci">
                                    <p className="fw-bold">Berapa hari minimal sewa mobil lepas kunci?</p>
                                </div>
                                <div id="collapseKunci" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                            eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                            veniam!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                    data-bs-toggle="collapse" data-bs-target="#collapseSewa" aria-expanded="false"
                                    aria-controls="collapseSewa">
                                    <p className="fw-bold">Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                                </div>
                                <div id="collapseSewa" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                            eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                            veniam!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                    data-bs-toggle="collapse" data-bs-target="#collapseAntar" aria-expanded="false"
                                    aria-controls="collapseAntar">
                                    <p className="fw-bold">Apakah Ada biaya antar-jemput?</p>
                                </div>
                                <div id="collapseAntar" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                            eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                            veniam!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                    data-bs-toggle="collapse" data-bs-target="#collapseCelaka" aria-expanded="false"
                                    aria-controls="collapseCelaka">
                                    <p className="fw-bold">Bagaimana jika terjadi kecelakaan?</p>
                                </div>
                                <div id="collapseCelaka" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                            eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                            veniam!</p>
                                    </div>
                                </div>
                            </div>  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ