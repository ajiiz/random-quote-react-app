import React from 'react'

const Form = ({handleClick, handleChange, allTags}) => {

    const options = allTags.map(tag => {
        return <option key={tag._id} value={tag.name}>{tag.name}</option>
    })

    return (
        <form>
            <select defaultValue="" onChange={handleChange}>
                <option value=''>Random</option>
                {options}
            </select>
            <button onClick={(event) => handleClick(event)}>Generate quote!</button>
        </form>
    )
}

export default Form
