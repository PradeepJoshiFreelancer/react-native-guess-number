import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./component/util/Constant";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);
  // Initally return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null;
  }
  const updatePickedNumber = (inputPickedNumber) => {
    setPickedNumber(inputPickedNumber);
    setIsGameOver(false);
  };

  const updateIsGameOver = (guessCount) => {
    setIsGameOver(true);
    setGuessRounds(guessCount);
  };

  const startNewGameHandler = () => {
    setPickedNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGame onNumberSelected={updatePickedNumber} />;
  if (pickedNumber) {
    screen = (
      <GameScreen enteredNumber={pickedNumber} onGameOver={updateIsGameOver} />
    );
  }

  if (isGameOver && pickedNumber)
    screen = (
      <GameOver
        roundNumber={guessRounds}
        userNumber={pickedNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootContainer}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
