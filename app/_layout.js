import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import { useTheme, PaperProvider } from "react-native-paper";
// import { StatusBar } from 'expo-status-bar';
export default function RootLayout() {
  const theme = {
    colors: {
      primary: "rgb(255, 179, 172)",
      onPrimary: "rgb(104, 0, 8)",
      primaryContainer: "rgb(147, 0, 16)",
      onPrimaryContainer: "rgb(255, 218, 214)",
      secondary: "rgb(231, 189, 184)",
      onSecondary: "rgb(68, 41, 39)",
      secondaryContainer: "rgb(93, 63, 60)",
      onSecondaryContainer: "rgb(255, 218, 214)",
      tertiary: "rgb(225, 195, 140)",
      onTertiary: "rgb(63, 45, 4)",
      tertiaryContainer: "rgb(88, 68, 25)",
      onTertiaryContainer: "rgb(254, 222, 166)",
      error: "rgb(255, 180, 171)",
      onError: "rgb(105, 0, 5)",
      errorContainer: "rgb(147, 0, 10)",
      onErrorContainer: "rgb(255, 180, 171)",
      background: "rgb(32, 26, 25)",
      onBackground: "rgb(237, 224, 222)",
      surface: "rgb(32, 26, 25)",
      onSurface: "rgb(237, 224, 222)",
      surfaceVariant: "rgb(83, 67, 66)",
      onSurfaceVariant: "rgb(216, 194, 191)",
      outline: "rgb(160, 140, 138)",
      outlineVariant: "rgb(83, 67, 66)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(237, 224, 222)",
      inverseOnSurface: "rgb(54, 47, 46)",
      inversePrimary: "rgb(186, 26, 32)",
      elevation: {
        level0: "transparent",
        level1: "rgb(43, 34, 32)",
        level2: "rgb(50, 38, 37)",
        level3: "rgb(57, 43, 41)",
        level4: "rgb(59, 44, 43)",
        level5: "rgb(63, 47, 46)",
      },
      surfaceDisabled: "rgba(237, 224, 222, 0.12)",
      onSurfaceDisabled: "rgba(237, 224, 222, 0.38)",
      backdrop: "rgba(59, 45, 44, 0.4)",
    }, // Copy it from the color codes  colors: yourGeneratedLightOrDarkScheme.colorsscheme and then use it here
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.background} />
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Seasons",
            }}
          />
        </Stack>
      </View>
    </PaperProvider>
  );
}
