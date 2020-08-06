import React from 'react'

const Form = ({handleClick, handleChange}) => {
    return (
        <form>
            <select onChange={handleChange}>
                <option></option>
            </select>
            <button onClick={handleClick}>Generate quote!</button>
        </form>
    )
}

export default Form
