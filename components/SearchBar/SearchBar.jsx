import { View, Text } from "react-native";
import React from "react";
import { Searchbar, Button } from "react-native-paper";

export const SearchBar = React.memo(
  ({ display, onPress, value, onChangeText, onPressSearch }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          margin: 10,
        }}
      >
        <Searchbar
          placeholder="Search"
          value={value}
          onChangeText={onChangeText}
          elevation={1}
          iconColor={"pink"}
        />
      </View>
    );
  }
);
