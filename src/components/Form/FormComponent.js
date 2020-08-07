import React from 'react'
import "../../styles/form.css"

const FormComponent = ({ options, handleChange, handleClick, tagName }) => {
    return (
        <form className="form">
            <select className="select" defaultValue={tagName} onChange={handleChange}>
                <option value="">Random</option>
                {options}
            </select>

            <button className="btn" onClick={(event) => handleClick(event)}>Generate quote!</button>
        </form>
    )
}

export default FormComponent