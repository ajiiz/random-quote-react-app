import React from 'react'
import "../../styles/form.css"

const FormComponent = ({ options, handleChange, handleClick }) => {
    return (
        <form className="form">
            <select classnName="drop-down-menu" defaultValue="" onChange={handleChange}>
                <option value="">Random</option>
                {options}
            </select>
            <button className="btn" onClick={(event) => handleClick(event)}>Generate quote!</button>
        </form>
    )
}

export default FormComponent