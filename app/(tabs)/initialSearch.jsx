import { View } from "react-native";
import React from "react";
import { SearchBar, MovieList } from "../../components";
const moviesInfo = [
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { title: "The Godfather", genre: "Crime", year: 1972 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "Pulp Fiction", genre: "Crime", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Adventure",
    year: 2003,
  },
  { title: "Forrest Gump", genre: "Drama", year: 1994 },
  { title: "Inception", genre: "Action", year: 2010 },
  { title: "The Matrix", genre: "Action", year: 1999 },
  { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
  { title: "Interstellar", genre: "Sci-Fi", year: 2014 },
  { title: "Fight Club", genre: "Drama", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
    year: 2001,
  },
  { title: "Goodfellas", genre: "Crime", year: 1990 },
  { title: "The Usual Suspects", genre: "Crime", year: 1995 },
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
];
const initialSearch = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <SearchBar />
      <MovieList movies={moviesInfo} />
    </View>
  );
};

export default initialSearch;
