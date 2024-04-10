// En DataContext.js

// Importar useEffect y useState si no están ya importados
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { getMovieById, searchMovies } from "../Utils/Utils";

export const MovieContext = createContext();

let idMovie = "tt0111161";
let idSearch = "godfather";

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState();
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  console.log("query", searchQuery);
  console.log("favorite", favoriteMovies);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    console.log("query", query);
  }, []);
  const handleEraserPress = useCallback(() => {
    setSearchQuery("");
  }, []);

  const toggleFavorite = (movie) => {
    console.log("movie", movie);
    if (favoriteMovies.some((favMovie) => favMovie.imdbID === movie.imdbID)) {
      setFavoriteMovies(
        favoriteMovies.filter((favMovie) => favMovie.imdbID !== movie.imdbID)
      );
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  const fetchMovieSearch = async () => {
    if (searchQuery.trim() !== "") {
      try {
        const results = await searchMovies(searchQuery);
        console.log(JSON.stringify(results, null, 2));
        setSearchData(results);
      } catch (error) {
        console.error("Error fetching search:", error);
      }
    }
  };

  const fetchMovieID = async () => {
    try {
      const results = await getMovieById(idMovie);
      console.log(results);
      setMovieData(results);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    fetchMovieSearch();
  }, [searchQuery]);

  return (
    <MovieContext.Provider
      value={{
        movieData,
        setMovieData,
        searchData,
        setSearchData,
        searchQuery,
        handleSearch,
        handleEraserPress,
        fetchMovieID,
        favoriteMovies,
        setFavoriteMovies,
        toggleFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
