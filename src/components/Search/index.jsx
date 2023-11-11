import './style.css'
export default function Search({handleName, handleCategory, handleIsRented, handlePrice, handleSearch, isSubmit, isDetail}) {

    return (
        <>
            <div className="search-car d-flex justify-content-center">
                <form action="">
                    <div className="row shadow bg-white rounded p-3 mb-1 mx-auto">
                        
                        {
                            isSubmit ? (
                                <div className="row ">
                                    <div className="col">
                                        <p><b>Pencarianmu</b></p>
                                    </div>
                                </div>
                            ) : (
                                <p></p>
                            )
                        }
                        <div className="col-sm">
                            <p>Nama Mobil</p>
                            <input type="text" className="form-control" placeholder="Ketik nama/tipe mobil" aria-label="Username" aria-describedby="basic-addon1" onChange={handleName} disabled={isSubmit?"disabled":""}></input>
                        </div>
                        <div className="col-sm">
                            <p>Kategori</p>
                            <select className="form-select text-muted" aria-label="Default select example" onChange={handleCategory} disabled={isSubmit?"disabled":""}>
                                <option value={""}>Masukan Kapasitas Mobil</option>
                                <option value={"small"}>1 - 4 orang</option>
                                <option value={"medium"}>4 - 6 orang</option>
                                <option value={"large"}>6 - 8 orang</option>
                            </select>
                        </div>
                        <div className="col-sm">
                            <p>Harga</p>
                            <select className="form-select text-muted" aria-label="Default select example" onChange={handlePrice} disabled={isSubmit?"disabled":""}>
                                <option value={""}>Masukan Harga Sewa per Hari</option>
                                <option value={"1"}>Rp.100.000 - Rp.200.000</option>
                                <option value={"2"}>Rp.200.000 - Rp.400.000</option>
                                <option value={"3"}>Rp.400.000 - Rp.600.000</option>
                            </select>
                        </div>
                        <div className="col-sm">
                            <p>Status</p>
                            <select className="form-select text-muted" aria-label="Default select example" onChange={handleIsRented} disabled={isSubmit?"disabled":""}>
                                <option value={""}>Pilih Status</option>
                                <option value={"true"}>Disewa</option>
                                <option value={"false"}>Belum Disewa</option>
                            </select>
                        </div>
                        {
                            !isDetail ? (
                                <div className="col-sm col-md-2 d-flex align-items-end">
                                    {
                                        isSubmit ? (
                                            <button type="button" className="btn btn-success" onClick={handleSearch}>Edit</button>
                                        ) : (
                                            <button type="reset" className="btn btn-success" onClick={handleSearch}>Cari Mobil</button>
                                        )
                                    }
                                    
                                </div>
                            ) : (
                                <div></div>
                            )
                        }
                        
                        
                    </div>
                </form>
            </div>
        </>
    )
}