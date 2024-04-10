// En DataContext.js
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

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleEraserPress = useCallback(() => {
    setSearchQuery("");
  }, []);

  const fetchMovieSearch = async () => {
    try {
      const results = await searchMovies(idSearch);
      console.log(JSON.stringify(results,null, 2));
      setSearchData(results);
    } catch (error) {
      console.error("Error fetching search:", error);
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
    fetchMovieSearch(idSearch);
  }, []);

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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
