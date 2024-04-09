import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
