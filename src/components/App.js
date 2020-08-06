import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'

const App = () => {
    const [quote, setQuote] = useState('there goes quote')
    const [author, setAuthor] = useState('there goes author')
    const [tagName, setTagName] = useState('friendship')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const [allTags, setAllTags] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
        let ignore = false
        const fetchData = async() => {
            try {
                setLoading(true)
                setError({})
                const response = await axios(`https://api.quotable.io/random/?tags=love`)
                if(!ignore) {
                    setAuthor(response.data.author)
                    setQuote(response.data.content)
                    console.log(quote)
                    console.log(author)
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
        console.log('clicked')
    }

    const handleChange = () => {

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
            <Form handleClick={handleClick} handleChange={handleChange}/>
        </div>
    )
}

export default App
