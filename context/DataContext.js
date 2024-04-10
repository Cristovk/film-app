import React, { createContext, useState, useEffect, useContext } from 'react';
import { getMovieById , searchMovies} from '../utils/Utils'; 

export const MovieContext = createContext();

let idMovie = 'tt0111161'
let idSearch = 'godfather'

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState();
  const [searchData, setSearchData] = useState([])

  const fetchMovieSearch = async () => {
    try {
      const results = await searchMovies(idSearch);
    } catch (error) {
      console.error('Error fetching search:', error);
    }
  };

  const fetchMovieID = async () => {
    try {
      const results = await getMovieById(idMovie);
      setMovieData(results);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };
  

  useEffect(() => {
    fetchMovieSearch();
    fetchMovieID();
  }, []);

  console.log('PostFetch', movieData)
  return (
    <MovieContext.Provider value={{ movieData, setMovieData, searchData, setSearchData }}>
      {children}
    </MovieContext.Provider>
  );
};