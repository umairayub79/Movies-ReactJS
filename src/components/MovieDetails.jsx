import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const { id } = useParams()

    const getMovie = async () => {
        const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true`)
        setMovie(response.data.data.movie)
        setGenres(response.data.data.movie.genres)
    }
    useEffect(() => {
        getMovie()
    }, [id])
    return (
        <div>
            <div className="container px-5 py-5 flex flex-col items-center justify-center md:justify-between md:flex-row">
                <img src={movie.medium_cover_image} alt={movie.slug} className="w-full" />
                <div className="py-5 md:px-10">
                    <h2 className="text-4xl font-semibold mt-1">{movie.title}</h2>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span>{movie.rating} |</span>
                        <span>{movie.runtime} |</span>
                        <span>{movie.year} |</span>
                        <span>{movie.mpa_rating}</span>
                        {genres.map(item => <span className="pr-2" key={item}> | {item}</span>)}
                    </div>

                    <p className="text-gray-600 mt-4">
                        {movie.description_intro}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
