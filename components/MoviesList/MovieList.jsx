import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { MovieContext } from "../../context/DataContext";

export const MovieList = () => {
  const { movies, onToggleFavorite } = useContext(MovieContext);

  return (
    <ScrollView>
      {movies.map((movie) => (
        <Card key={movie.id} onPress={() => onToggleFavorite(movie.id)}>
          <Card.Cover source={{ uri: movie.posterUrl }} />
          <Card.Content>
            <Title>{movie.title}</Title>
            <Paragraph>{movie.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};
