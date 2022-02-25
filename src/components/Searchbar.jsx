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
        <form onSubmit={onFormSubmit} className='flex border rounded-lg'>
            <input onChange={ e => setInput(e.target.value)}
            value={input}
            placeholder='Search...'
            type="text"
            className='p-2 w-80 focus:outline-none'/>

            <button type='submit' className='p-2'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            </button>
        </form>
    )
}

export default SearchBar