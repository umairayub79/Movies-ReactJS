import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {MdStar,MdDownload} from 'react-icons/md'
import {FaDownload} from 'react-icons/fa'
const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const [torrents, setTorrents] = useState([])
    const [error, setError] = useState()
    const { id } = useParams()

    const getMovie = async () => {
      try{
        const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true`)
        setMovie(response.data.data.movie)
        setGenres(response.data.data.movie.genres)
        setTorrents(response.data.data.movie.torrents)
      } catch (e) {
        setError(e)
      }
    }
    useEffect(() => {
        getMovie()
    }, [id])
    return (
        <div className="flex flex-col justify-center m-1 md:flex-row">
        {error ? (<h1 className="text-center text-2xl text-red-400 font-bold p-3">{error.message}</h1>) : (<>
        <img src={movie.large_cover_image} alt={movie.slug} className="w-full" />
               <div className="p-5">
                    <h2 className="text-2xl md:text-3xl font-semibold">{movie.title}</h2>
                    <div className="container ms-auto mt-2 text-gray-700">
                      <span className="px-3 py-1 m-1 rounded-full bg-gray-100" >{movie.year}</span>
                      <span className="px-3 py-1 m-1 rounded-full bg-gray-100">{movie.runtime} Min.</span>
                      <span className="px-3 py-1 m-1 rounded-full bg-gray-100"><MdStar className="inline-block"/> {movie.rating}</span>
                    </div>
                    <div className="flex items-center flex-wrap mt-2">
                       {genres.map(item => <span className="px-3 py-1 m-1 rounded-full bg-gray-100 text-gray-700" key={item}>{item}</span>)}
                    </div>
                    <h3 className="text-1xl font-semibold text-gray-700 mt-2">Synopsis</h3>
                    <p className="text-gray-600">
                        {movie.description_intro}
                    </p>
                    <hr/>
                    <div className="">
                  
                      <h3 className="text-1xl font-semibold text-gray-700 mt-2">Download</h3>
                      {torrents.map(torrent => <a href={torrent.url}><div className="border-2 flex flex-row space-x-8 mt-4"> <div>{torrent.type}.{torrent.quality}</div> <div>{torrent.size}</div> <FaDownload className="ml-2"/></div></a>)}
                    </div>
                    
                    <div className="mt-5">
                    <h3 className="text-1xl font-semibold text-gray-700 mt-2">Watch Trailer</h3>
                    <iframe  className="w-full h-52" src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
                    </div>
                   
            </div>
   
        </>)}
        </div>
    )
}

export default MovieDetails
