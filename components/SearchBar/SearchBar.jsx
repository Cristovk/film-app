import { View, Text } from "react-native";
import React from "react";
import { Searchbar, Button } from "react-native-paper";

export const SearchBar = React.memo(
  ({ eraserPress, onPress, value, onChangeText }) => {
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
          clearIcon={() => (
            <Button
              icon="close"
              onPress={eraserPress}
              style={{ marginRight: 10 }}
            />
          )}
        />
      </View>
    );
  }
);
