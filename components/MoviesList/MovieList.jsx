import React, { useContext, useState } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MovieCard } from "./MovieCard.jsx";
import { MovieContext } from "../../context/DataContext";

export const MovieList = () => {
  const { searchData, toggleFavorite, handleDetailsPress } =
    useContext(MovieContext);
  const [visibleMovies, setVisibleMovies] = useState(10); // Number of movies to display initially

  const loadMoreMovies = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {searchData.slice(0, visibleMovies).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.Title}
            year={movie.Year}
            imdbID={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
            toggleFavorite={toggleFavorite}
            isFavorite={movie.isFavorite}
            onDetailsPress={() => handleDetailsPress(movie.imdbID)}
          />
        ))}
      </ScrollView>
      {visibleMovies < searchData.length && (
        <TouchableOpacity
          style={styles.loadMoreButton}
          onPress={loadMoreMovies}
        >
          <Text style={styles.loadMoreText}>Load More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    marginHorizontal: 20,
  },
  loadMoreButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  loadMoreText: {
    color: "white",
  },
});
