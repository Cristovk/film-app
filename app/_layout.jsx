import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
const StackLayout = () => {
  return (
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
  );
};
export default StackLayout;
