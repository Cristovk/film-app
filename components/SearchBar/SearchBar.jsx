import { View } from "react-native";
import React from "react";
import { Searchbar, Button } from "react-native-paper";

export const SearchBar = React.memo(
  ({ eraserPress, onSubmitEditing, value, onChangeText, onKeyPress }) => {
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
          onKeyPress={onKeyPress}
          iconColor={"pink"}
          onSubmitEditing={onSubmitEditing}
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
