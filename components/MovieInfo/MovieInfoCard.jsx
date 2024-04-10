import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const MovieInfoCard = ({ movieInfo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: movieInfo.Poster }} style={styles.poster} />
      <Text style={styles.title}>
        {movieInfo.Title} ({movieInfo.Year})
      </Text>
      <Text style={styles.director}>Directed by: {movieInfo.Director}</Text>
      <Text style={styles.genre}>Genre: {movieInfo.Genre}</Text>
      <Text style={styles.plot}>{movieInfo.Plot}</Text>
      <Text style={styles.rating}>IMDb Rating: {movieInfo.imdbRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  director: {
    fontStyle: "italic",
    marginBottom: 5,
  },
  genre: {
    marginBottom: 5,
  },
  plot: {
    marginBottom: 10,
  },
  rating: {
    fontWeight: "bold",
  },
});
