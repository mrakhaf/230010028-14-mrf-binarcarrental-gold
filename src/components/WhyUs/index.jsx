import './style.css'
import WhyUsCard from '../WhyUsCard'

const WhyUs = () => {

    const details = [
        {
            color: "yellow",
            icon: "bi-hand-thumbs-up",
            head: "Mobil Murah",
            desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
        },
        {
            color: "red",
            icon: "bi-tag",
            head: "Harga Murah",
            desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
        },
        {
            color: "blue",
            icon: "bi-clock",
            head: "Layanan 24 Jam",
            desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
        },
        {
            color: "green",
            icon: "bi-award",
            head: "Sopir Professional",
            desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
        },
    
    ]

    return (
        <>
        <div className="why-us py-5" id="why-us">
            <div className="container py-5 fw-bold">
                <h3>Why Us?</h3>
                <p>Mengapa harus pilih Binar Car Rental?</p>
                <div className="row">
                    {
                        details.map( (detail, i) => (
                            <WhyUsCard detail={detail} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default WhyUs