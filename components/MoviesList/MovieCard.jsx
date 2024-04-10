import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, IconButton } from "react-native-paper";

export const MovieCard = ({ movieName, onToggleFavorite, isFavorite }) => {
  const toggleFavorite = () => {
    onToggleFavorite(movieName);
  };

  return (
    <View style={{ width: "80%", alignSelf: "center" }}>
      <Card>
        <Card.Title title={"El mostro de el lago"} />
        <Card.Actions>
          <TouchableOpacity onPress={toggleFavorite}>
            <IconButton
              icon="star"
              iconColor="#FBFF81"
              mode="contained-tonal"
            />
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  );
};
