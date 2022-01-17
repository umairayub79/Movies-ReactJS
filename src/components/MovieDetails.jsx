import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const [cast, setCast] = useState([])
    const { id } = useParams()

    const getMovie = async () => {
        const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
        setMovie(response.data.data.movie)
        setGenres(response.data.data.movie.genres)
        setCast(response.data.data.movie.cast)
    }
    useEffect(() => {
        getMovie()
    }, [])
    return (
        <div className="border-b border-gray-800">
            <div className="container mx-auto px-4 py-16 flex">
                <img src={movie.medium_cover_image} alt={movie.slug} className="w-96" />
                <div className="ml-24">
                    <h2 className="text-4xl font-semibold">{movie.title}</h2>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span className="ml-1">{movie.rating}</span>
                        <span className="mx-2">|</span>
                        <span>{movie.year}</span>
                        <span className="mx-2">|</span>
                        <span>{movie.mpa_rating}</span>
                        <span className="mx-2">|</span>
                        {genres.map(item => <span className="pr-2" key={item}>{item}</span>)}
                    </div>

                    <p className="text-gray-600 mt-8">
                        {movie.description_intro}
                    </p>
                </div>
            </div>
            {cast &&
                <div className="border-b border-gray-800">
                    <div className="container mx-auto px-4 py-16">
                        <h2 className="text-4xl">Cast</h2>
                        <div className="p-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                            {cast.map(item =>
                                <div>
                                    <img src={item.url_small_image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.character_name}</p>
                                </div>)}
                        </div>
                    </div>
                </div>
            }
            {cast &&
                <div className="border-b border-gray-800">
                    <div className="container mx-auto px-4 py-16">
                        <h2 className="text-4xl">Screenshots</h2>
                        <div className="p-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                            <div>
                                <img src={movie.large_screenshot_image1} alt="" />
                            </div>
                            <div>
                                <img src={movie.large_screenshot_image2} alt="" />
                            </div>
                            <div>
                                <img src={movie.large_screenshot_image3} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default MovieDetails
