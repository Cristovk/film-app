import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MovieCard } from "./MovieCard.jsx";
import { MovieContext } from "../../context/DataContext";

export const MovieList = () => {
  const { searchData, onToggleFavorite } = useContext(MovieContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {searchData.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.Title}
            year={movie.Year}
            imdbID={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
            onToggleFavorite={onToggleFavorite}
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
