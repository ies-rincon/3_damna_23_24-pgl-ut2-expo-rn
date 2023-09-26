import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";

import { useColorScheme, Button } from "react-native";

export const RootLayoutNav = ({
  restartApp: _restartApp,
}: {
  restartApp: () => void;
}) => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            title: "3º DAM - PGL",
            presentation: "modal",
            headerRight: () => <Button onPress={_restartApp} title="Restart" />,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
};
