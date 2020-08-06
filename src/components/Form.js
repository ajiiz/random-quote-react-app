import React from 'react'

const Form = ({handleClick, handleChange, options}) => {
    return (
        <form>
            <button onClick={(event) => handleClick(event)}>Generate quote!</button>
        </form>
    )
}

export default Form
