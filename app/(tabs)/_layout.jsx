import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="initialSearch"
        options={{
          title: "Search",
          headerTitle: "Search Movie",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "pink" },
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerTitle: "Favorite Movies",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "pink" },
        }}
      />
    </Tabs>
  );
};
