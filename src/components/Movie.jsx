import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ movie}) => {
    return (
        <div className='bg-gray-800 text-white'>
            <Link to={`/movie/${movie.id}`}>
                <img src={movie.medium_cover_image} alt={movie.title} className='w-full'/>
                <p className='pl-4 pt-1'>{movie.title}</p>
                <p className='pl-4'>Rating {movie.rating}</p>
            </Link>
        </div>
    )
}

export default Movie
