import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

export const MovieCard = ({
  title,
  year,
  imdbID,
  type,
  poster,
  onToggleFavorite,
  isFavorite,
  onDetailsPress,
}) => {
  const toggleFavorite = () => {
    onToggleFavorite(title);
  };

  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Card.Cover source={{ uri: poster }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text variant="titleLarge" style={styles.title}>
            {title}
          </Text>
          <Text variant="bodyMedium">{year}</Text>
          <Text variant="bodyMedium">{type}</Text>
        </View>
      </View>
      <Card.Actions style={styles.actions}>
        <TouchableOpacity onPress={toggleFavorite}>
          <IconButton
            icon={isFavorite ? "star" : "star-outline"}
            color={isFavorite ? "gold" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDetailsPress(imdbID)}>
          <IconButton icon="chevron-right" color="black" />
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
  },
  cardContent: {
    flexDirection: "row",
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginBottom: 5,
  },
  actions: {
    justifyContent: "space-between",
  },
});
