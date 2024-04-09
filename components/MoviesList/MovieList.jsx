import React, { useState } from "react";
import { ScrollView } from "react-native";
import MovieCard from "./MovieCard";

export const MovieList = ({ movies }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movieName) => {
    if (favorites.includes(movieName)) {
      setFavorites(favorites.filter((name) => name !== movieName));
    } else {
      setFavorites([...favorites, movieName]);
    }
  };

  return (
    <ScrollView>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movieName={movie.title}
          onToggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(movie.title)}
        />
      ))}
    </ScrollView>
  );
};
