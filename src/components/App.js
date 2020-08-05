import React, { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [quote, setQuote] = useState('there goes quote')
    const [author, setAuthor] = useState('there goes author')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        let ignore = false
        const fetchData = async() => {
            try {
                setLoading(true)
                setError({})
                const response = await axios('https://api.quotable.io/random')
                if(!ignore) {
                    setAuthor(response.data.author)
                    setQuote(response.data.content)
                }
            } catch(err) {
                setError(false)
            }
            setLoading(false)
        }
        fetchData()
        return(() => {
            ignore = true
        })
    }

    return (
        <div className="main">
            {(!loading) ? (
                <div className="quote">
                    <div className="quote-content">{quote}</div>
                    <div className="quote-name">{author}</div>
                </div>
            ) : (
                <h1>Loading</h1>
            )}
            <button onClick={handleClick}>Generate quote!</button>
        </div>
    )
}

export default App
