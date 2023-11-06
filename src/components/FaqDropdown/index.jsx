

const FaqDropdown = ({faq}) => {
    return (
        <>
            <div className="card mb-3">
                <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                    data-bs-toggle="collapse" data-bs-target={`#${faq.collapse}`} aria-expanded="false"
                    aria-controls={faq.collapse}>
                    <p className="fw-bold">{faq.question}</p>
                </div>
                <div id={faq.collapse} className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p>{faq.answer}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqDropdown