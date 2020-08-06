import React from 'react'

const Form = ({handleClick, handleChange, allTags}) => {

    const options = allTags.map(tag => {
        return <option key={tag._id} value={tag.name}>{tag.name}</option>
    })

    return (
        <form>
            <select defaultValue="" onChange={(event) => handleChange}>
                <option value="Choose Tag"></option>
                {options}
            </select>
            <button onClick={(event) => handleClick(event)}>Generate quote!</button>
        </form>
    )
}

export default Form
