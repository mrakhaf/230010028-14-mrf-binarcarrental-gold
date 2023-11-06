const WhyUsCard = ({detail}) => {
    return (
        <div className="col-12 col-sm-6 col-md-3 my-2">
            <div className="card">
                <div className={`card-body ${detail.color}`}>
                    <i className={`bi ${detail.icon}`}></i>
                    <p>{detail.head}</p>
                    <p>{detail.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUsCard