import React, { useContext, useState } from "react";
import { View } from "react-native";
import { SearchBar, MovieList } from "../../components";
import { MovieContext } from "../../context/DataContext";

const InitialSearch = () => {
  const { handleSearch } = useContext(MovieContext);
  const [inputValue, setInputValue] = useState("");

  const onSearchSubmit = () => {
    handleSearch(inputValue);
  };

  const onSearchChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <SearchBar
        value={inputValue}
        onChangeText={onSearchChange}
        onSubmitEditing={onSearchSubmit}
      />
      <MovieList />
    </View>
  );
};

export default InitialSearch;
