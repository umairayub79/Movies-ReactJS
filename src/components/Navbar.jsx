import React from 'react'
import SearchBar from './Searchbar'
const Navbar = () => {
    return (
        <div className='bg-gray-100 text-black p-2 flex flex-col items-center justify-center md:justify-between md:flex-row'>
            <span className='px-5 font-extrabold'>Mflix</span>
            <SearchBar />
        </div>
    )
}
export default Navbar
