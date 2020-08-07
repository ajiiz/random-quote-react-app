import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import Loading from '../components/Loading'
import '../styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

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
        console.log(tagName)
        let ignore = false
        const fetchData = async() => {
            try {
                setLoading(true)
                setError({})
                const response = (tagName!=='') ?
                    await axios(`https://api.quotable.io/random/?tags=${tagName}`)
                :   await axios(`https://api.quotable.io/random`)
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
    }

    const handleChange = (event) => {
        const {value} = event.target
        setTagName(value)
        console.log(tagName)
    }

    return (
        <div className="container">
            <div className="main">
                {(!loading) ? (
                    <div className="quote">
                        <div className="quote-text">
                            <div className="quote-content">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                {quote}
                            </div>
                        </div>
                        <div className="quote-name">{author}</div>
                        <Form handleClick={handleClick} handleChange={handleChange} allTags={allTags}/>
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    )
}

export default App
