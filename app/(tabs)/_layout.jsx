import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

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
          tabBarIcon: () => <Icon name="search" color="##fcabf9" />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerTitle: "Favorite Movies",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "pink" },
          tabBarIcon: () => <Icon name="favorite" color="##fcabf9" />,
        }}
      />
    </Tabs>
  );
};
