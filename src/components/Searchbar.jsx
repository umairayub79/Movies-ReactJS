import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const SearchBar = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    function onFormSubmit(e) {
        e.preventDefault()
        if(input.length === 0){
            return;
        }
        setInput('')
        navigate(`/search/${input}`)
    }

    return (
        <form onSubmit={onFormSubmit} className='flex border-2 rounded-lg'>
            <input onChange={ e => setInput(e.target.value)}
            value={input}
            placeholder='Search...'
            type="text"
            className='px-2 py-1 w-80 focus:shadow focus:outline-none'/>

            <button type='submit' className='flex items-center justify-center px-2 border-1'>
                <i className='fas fa-search h-6 w-6 text-gray-600'></i>
            </button>
        </form>
    )
}

export default SearchBar