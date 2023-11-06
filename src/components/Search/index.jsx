import './style.css'
export default function Search() {
    return (
        <>
            <div className="search-car d-flex justify-content-center">
                <div className="row shadow bg-white rounded p-3 mb-5 mx-auto">
                    <div className="col-sm">
                        <p>Nama Mobil</p>
                        <input type="text" class="form-control" placeholder="Ketik nama/tipe mobil" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="col-sm">
                        <p>Kategori</p>
                        <select class="form-select text-muted" aria-label="Default select example">
                            <option selected>Masukan Kapasitas Mobil</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <p>Harga</p>
                        <select class="form-select text-muted" aria-label="Default select example">
                            <option selected>Masukan Harga Sewa per Hari</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <p>Status</p>
                        <select class="form-select text-muted" aria-label="Default select example">
                            <option selected>Pilih Status</option>
                            <option value="Disewa">Disewa</option>
                            <option value="Belum Disewa">Belum Disewa</option>
                        </select>
                    </div>
                    <div className="col-sm col-md-2 d-flex align-items-end">
                        <button type="button" class="btn btn-success">Cari Mobil</button>
                    </div>
                    

                </div>
                
            </div>
        </>
    )
}