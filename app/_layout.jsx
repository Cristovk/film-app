import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MovieProvider } from "../context/DataContext";
const StackLayout = () => {
  return (
    <MovieProvider>
      <SafeAreaProvider>
        <Stack style={{ justifyContent: "center", alignItems: "center" }}>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </MovieProvider>
  );
};
export default StackLayout;
