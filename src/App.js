import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import Movies from './components/Movies.jsx';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
    <div className="flex flex-col justify-center justify-items-center">
        <Routes>
          <Route path="/" element={<Movies/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/search/:query" element={<Movies/>} />
        </Routes>
    </div>
    </div>
    
  )
}
export default App;
