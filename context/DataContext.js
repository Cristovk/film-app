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
  console.log("query", searchQuery);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    console.log("query", query); // Verificar el valor de búsqueda
  }, []);
  const handleEraserPress = useCallback(() => {
    setSearchQuery("");
  }, []);

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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
