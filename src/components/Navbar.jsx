import React from 'react'
import SearchBar from './Searchbar'
const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white border-b text-black p-2 flex flex-col items-center justify-center md:justify-between md:flex-row'>
            <h1 className='p-2 text-2xl md:text-4xl font-extrabold'>Mflix</h1>
            <SearchBar />
        </div>
    )
}
export default Navbar