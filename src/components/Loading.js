import React from 'react'
import '../styles/loading.css'

const Loading = () => {
    return (
        <div className="animation">
            <div className="c">
                <div className="rec spinner5"></div>
                <div className="rec spinner6"></div>
            </div>
        </div>
    )
}

export default Loading