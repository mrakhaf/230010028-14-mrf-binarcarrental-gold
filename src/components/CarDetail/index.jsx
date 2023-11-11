import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        getCarById(id)
    }, [])

    const getCarById = (carId) => {
        axios.get(`https://api-car-rental.binaracademy.org/customer/car/${carId}`)
        .then(res => {
            if (res.data.category == "small") {
                res.data.capacity = "1 - 4 orang"
            } else if (res.data.category == "medium") {
                res.data.capacity = "4 - 6 orang"
            } else {
                res.data.capacity = "6 - 8 orang"
            }
            setCar(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container container-detail-car mb-5 mt-5">
                <div className="row">
                    <div className="col-md-7 col-sm-12 mb-2">
                        <div className="left border rounded p-3">
                            <h5>Tentang Paket</h5>
                            <br />
                            <h5>Include</h5>
                            <ul>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>
                            <br />
                            <h5>Exclude</h5>
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="mb-3">
                                    <div className="accordion-header accordion-button collapsed cursor-pointer p-0"
                                        data-bs-toggle="collapse" data-bs-target="#collapseCar" aria-expanded="false"
                                        aria-controls="collapseCar">
                                        <h5 className="mt-2">Refund, Reschedule, Overtime</h5>
                                    </div>
                                    <div id="collapseCar" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body p-0">
                                            <ul>
                                                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="right border rounded p-3">
                            <div className="image-detail px-5 py-2 mb-4">
                                <img src={car.image} alt="" className="img-fluid" />
                            </div>
                            <div className="detail-car-desc mb-4">
                                <h5>{car.name}</h5>
                                <p><i className="bi bi-people"></i> {car.capacity}</p>
                            </div>
                            <div className="detail-car-price d-flex justify-content-between">
                                <h5>Total</h5>
                                <p>Rp  {new Intl.NumberFormat('en-US').format(car.price)}</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default CarDetail