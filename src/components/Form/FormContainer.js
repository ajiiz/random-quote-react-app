import React from 'react'
import FormComponent from './FormComponent'

const Form = ({ handleClick, handleChange, allTags }) => {

    const options = allTags.map(tag => {
        return <option key={tag._id} value={tag.name}>{tag.name}</option>
    })

    return (
        <FormComponent options={options} handleChange={handleChange} handleClick={handleClick}/>
    )
}

export default Form