import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Form from './Form/FormContainer'
import Loading from './LoadingComponent'
import Quote from './QuoteComponent'
import '../styles/app.css'

const App = () => {
    const [quote, setQuote] = useState('there goes quote')
    const [author, setAuthor] = useState('there goes author')
    const [tagName, setTagName] = useState('')
    const [allTags, setAllTags] = useState([])
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://api.quotable.io/tags')
        .then(response => response.json())
        .then(result => {
            setAllTags(result)
        })
    }, [])

    const handleClick = (event) => {
        event.preventDefault()
        fetchData()
    }

    const handleChange = (event) => {
        const {value} = event.target
        setTagName(value)
    }

    const fetchData = async() => {
        let ignore = false
        try {
            setLoading(true)
            setError({})
            const response = (tagName!=='') ?
                await axios(`https://api.quotable.io/random/?tags=${tagName}`)
            :   await axios(`https://api.quotable.io/random`)
            if(!ignore) {
                setAuthor(response.data.author)
                setQuote(response.data.content)
            }
        } catch(err) {
            setError(false)
        }
        setLoading(false)
        return(() => {
            ignore = true
        })
    }

    return (
        <div className="container">
            <div className="main">
                {(!loading) ? (
                    <div className="quote">
                        <Quote
                            quote={quote}
                            author={author}
                        />
                        <Form
                            handleClick={handleClick}
                            handleChange={handleChange}
                            allTags={allTags}
                            tagName={tagName}
                        />
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    )
}

export default App
