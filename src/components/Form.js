import React from 'react'
import "../styles/form.css"

const Form = ({handleClick, handleChange, allTags}) => {

    const options = allTags.map(tag => {
        return <option key={tag._id} value={tag.name}>{tag.name}</option>
    })

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

export default Form
