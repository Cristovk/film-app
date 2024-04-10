import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MovieCard } from "./MovieCard.jsx";
import { MovieContext } from "../../context/DataContext.js";

export const FavoriteList = () => {
  const { favoriteMovies, toggleFavorite } = useContext(MovieContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {favoriteMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            imdbID={movie.imdbID}
            type={movie.type}
            poster={movie.poster}
            toggleFavorite={toggleFavorite}
            isFavorite={movie.isFavorite}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    marginHorizontal: 20,
  },
});
