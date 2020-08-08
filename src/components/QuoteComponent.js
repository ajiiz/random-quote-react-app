import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import "../styles/quote.css"

const Quote = ({author, quote}) => {
    return (
        <div>
            <div className="quote-text">
                <div className="quote-content">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    {" "+quote}
                </div>
            </div>
                <div className="quote-name">
                <span className="author">{author}</span>
            </div>
        </div>
    )
}

export default Quote
