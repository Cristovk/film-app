import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MovieProvider } from "../context/DataContext";
import { PaperProvider } from "react-native-paper";
const StackLayout = () => {
  return (
    <MovieProvider>
      <PaperProvider>
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
      </PaperProvider>
    </MovieProvider>
  );
};
export default StackLayout;
