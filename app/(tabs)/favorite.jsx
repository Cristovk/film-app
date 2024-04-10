import React from "react";
import { View } from "react-native";
import { FavoriteList } from "../../components";
import { MovieContext } from "../../context/DataContext";

const favorite = () => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <FavoriteList />
    </View>
  );
};

export default favorite;
