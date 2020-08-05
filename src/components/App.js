import React, { useState } from 'react'

const App = () => {
    const [quote, setQuote] = useState('there goes quote')
    const [author, setAuthor] = useState('there goes author')
    return (
        <div className="main">
            <h1>{quote}</h1>
            <p>{author}</p>
        </div>
    )
}

export default App
