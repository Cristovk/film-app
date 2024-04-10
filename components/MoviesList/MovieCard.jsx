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
          <Text variant="bodyMedium" style={styles.text}>
            {year} | {type}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={toggleFavorite}>
            <IconButton
              icon={isFavorite ? "star" : "star-outline"}
              color={isFavorite ? "gold" : "gray"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDetailsPress(imdbID)}>
            <IconButton icon="chevron-right" color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 20,
  },
  cardContent: {
    flexDirection: "row",
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 100,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  title: {
    marginBottom: 5,
  },
  actions: {
    flexDirection: "column",
    alignItems: "flex-end",
    paddingHorizontal: 5,
  },
});
