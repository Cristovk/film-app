import React, { useContext } from "react";
import { View, Text } from "react-native";
import MovieInfoCard from "../../components"; // Importa el componente MovieInfoCard
import { MovieContext } from "../../context/DataContext";

const detail = () => {
  const { movieData } = useContext(MovieContext); // Obtén movieData del contexto

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <Text>Detail Page quedo pendiente por estilo</Text>
      {/*<MovieInfoCard movieInfo={movieData} />*/}
    </View>
  );
};

export default detail;
