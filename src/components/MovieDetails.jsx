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
    }, [])
    return (
        <div>
            <div className="container px-5 py-5 flex flex-col items-center justify-center md:justify-between md:flex-row">
                <img src={movie.medium_cover_image} alt={movie.slug} className="w-96" />
                <div>
                    <h2 className="text-4xl font-semibold mt-1">{movie.title}</h2>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span className="ml-1">{movie.rating}</span>
                        <span className="mx-2">|</span>
                        <span>{movie.year}</span>
                        <span className="mx-2">|</span>
                        <span>{movie.mpa_rating}</span>
                        <span className="mx-2">|</span>
                        {genres.map(item => <span className="pr-2" key={item}>{item}</span>)}
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
