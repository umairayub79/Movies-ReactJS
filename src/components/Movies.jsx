import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Movie from './Movie'
import Pagination from './Pagination'

const Movies = () => {
    const [response, setResponse] = useState([])
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [error, setError] = useState()
    const { query } = useParams()

    const getMovies = async () => {
        let response = []
        try {
            if (query !== undefined && query !== null && query !== "") {
                response = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}&query_term=${query}`)
            } else {
                response = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
            }
            setResponse(response.data.data)
            setMovies(response.data.data.movies)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    const gotoPage = (p) => {
      if (!p < 1){
        setPage(p)
      }
    }

    useEffect(() => {
        setPage(1)
    }, [query])
    
    useEffect(() => {
        setLoading(true)
        setError(null)
        getMovies()
    }, [page, query])



    return (
        <div className="container mx-auto">
          {query ? (<h1 className="text-2xl font-bold p-3">Search Results: ({response.movie_count})</h1>) : (<h1 className="text-2xl font-bold p-3">Explore</h1>)}
          {error ? (<h1 className="text-center text-2xl text-red-400 font-bold p-3">{error.message}</h1>) : (loading ? (<h1 className="text-center">Loading</h1>) : (
          <div>
            {movies ? (<div className='p-5 grid grid-cols-2 gap-4 md:grid-cols-5'> {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))} </div>) : (<h1 className="text-center">Nothing found</h1>) }
            <Pagination total_items={response.movie_count} currentPage={page} gotoPage={gotoPage} />
          </div>))} 
        </div>
    )
}
export default Movies