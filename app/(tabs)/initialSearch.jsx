import React, { useContext } from "react";
import { View } from "react-native";
import { SearchBar, MovieList, MovieCard } from "../../components";
import { MovieContext } from "../../context/DataContext";

const InitialSearch = () => {
  const { searchQuery, handleSearch, handleEraserPress } =
    useContext(MovieContext);

  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <SearchBar
        value={searchQuery}
        onChangeText={handleSearch}
        eraserPress={handleEraserPress}
      />
      <MovieList />
    </View>
  );
};

export default InitialSearch;
