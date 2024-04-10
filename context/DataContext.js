import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage from @react-native-async-storage/async-storage
import { getMovieById, searchMovies } from "../Utils/Utils";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState();
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [inDetail, setInDetail] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [idMovie, setIdMovie] = useState("");
  console.log("idMovie", idMovie);
  console.log("favorite", favoriteMovies);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    console.log("query", query);
  }, []);
  const handleEraserPress = useCallback(() => {
    setSearchQuery("");
  }, []);
  const handleDetailsPress = (imdbID) => {
    setInDetail(true);
    setIdMovie(imdbID);
  };

  const toggleFavorite = async (movie) => {
    let updatedFavorites = [];
    if (favoriteMovies.some((favMovie) => favMovie.imdbID === movie.imdbID)) {
      updatedFavorites = favoriteMovies.filter(
        (favMovie) => favMovie.imdbID !== movie.imdbID
      );
    } else {
      updatedFavorites = [...favoriteMovies, movie];
    }

    try {
      await AsyncStorage.setItem(
        "favoriteMovies",
        JSON.stringify(updatedFavorites)
      );
      setFavoriteMovies(updatedFavorites);
    } catch (error) {
      console.error("Error saving favorite movies to AsyncStorage:", error);
    }
  };

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favorites = await AsyncStorage.getItem("favoriteMovies");
        if (favorites) {
          setFavoriteMovies(JSON.parse(favorites));
        }
      } catch (error) {
        console.error(
          "Error loading favorite movies from AsyncStorage:",
          error
        );
      }
    };

    loadFavorites();
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

  useEffect(() => {
    fetchMovieID();
  }, [inDetail]);

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
        inDetail,
        setInDetail,
        handleDetailsPress,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
