import React from 'react'
import FormComponent from './FormComponent'

const Form = ({ handleClick, handleChange, allTags, tagName }) => {

    const options = allTags.map(tag => {
        let name = tag.name
        name = name[0].toUpperCase() + name.slice(1)
        return <option key={tag._id} value={name}>{name}</option>
    })

    return (
        <FormComponent
            options={options}
            handleChange={handleChange}
            handleClick={handleClick}
            tagName={tagName}
        />
    )
}

export default Form