import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ movie}) => {
    return (
        <div className="rounded-xl shadow-lg">
            <Link to={`/movie/${movie.id}`}>
                <img src={movie.medium_cover_image} alt={movie.title} className='w-full rounded-md overflow-hidden'/>
             </Link>
        </div>
    )
}

export default Movie
 