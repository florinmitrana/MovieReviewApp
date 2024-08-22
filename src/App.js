import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import Layout from './api/layout';
import {Routes, Route} from 'react-router-dom';
import Home from './api/components/Home';
import Header from './api/components/header/header';
import Trailer from './api/components/trailer/trailer';
import Reviews from './api/components/reviews/reviews';
function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);


  const getMovies = async () =>{

    try{
      const response = await api.get("api/v1/movies");
      console.log(response.data);

      setMovies(response.data);

    }catch(err){console.log(err);}

  }


  const getMovieData = async (movieId) =>{
    try{
      const response = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = response.data

      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);

    }catch(err){ console.log(err)}

  }
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ="/" element= {<Layout/>}>
          <Route path="/" element={<Home movies={movies}/> }></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path = "/Reviews/:movieId" element={<Reviews getMovieData = {getMovieData} reviews = {reviews} setReviews= {setReviews}/>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
