import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, IconButton } from "react-native-paper";

export const MovieCard = ({ movieName, onToggleFavorite, isFavorite }) => {
  const toggleFavorite = () => {
    onToggleFavorite(movieName);
  };

  return (
    <Card style={{ margin: 10, padding: 10 }}>
      <Card.Title title={movieName} />
      <Card.Actions>
        <TouchableOpacity onPress={toggleFavorite}>
          <IconButton
            icon={isFavorite ? "star" : "star-outline"}
            color={isFavorite ? "gold" : "gray"}
          />
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};
