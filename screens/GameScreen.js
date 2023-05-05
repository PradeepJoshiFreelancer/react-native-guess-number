import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../component/ui/Title";
import { useEffect, useState } from "react";
import GuessedNumberContainer from "../component/game/GuessedNumberContainer";
import PrimaryButton from "../component/ui/PrimaryButton";
import InstructionText from "../component/ui/InstructionText";
import Card from "../component/ui/Card";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessItem from "../component/game/GuessItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ enteredNumber, onGameOver }) {
  const currentGuess = generateRandomBetween(1, 100, enteredNumber);
  const [guessRounds, setGuessedRounds] = useState([]);
  const [currentGuessedNumber, setCurrentGuessedNumber] =
    useState(currentGuess);

  useEffect(() => {
    if (currentGuessedNumber === enteredNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuessedNumber, enteredNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessNumber = (direction) => {
    if (
      (direction === "lower" && enteredNumber > currentGuessedNumber) ||
      (direction === "higher" && enteredNumber < currentGuessedNumber)
    ) {
      Alert.alert("Wrong suggestion", "Please suggest the right choice!", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuessedNumber;
    } else {
      minBoundary = currentGuessedNumber + 1;
    }
    const newGuessNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuessedNumber
    );
    setCurrentGuessedNumber(newGuessNumber);
    setGuessedRounds((prevState) => [newGuessNumber, ...prevState]);
  };
  const setGuessedRoundsLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>App Guessed Number</Title>
      <GuessedNumberContainer>{currentGuessedNumber}</GuessedNumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.actionContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* {guessRounds.map(guessedNumber => <Text key={guessedNumber}>Your Guessed Number = {guessedNumber}</Text>)} */}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessItem
              guessedNumber={itemData.item}
              roundNumber={setGuessedRoundsLength - itemData.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  instructionText: {
    marginBottom: 12,
  },
  actionContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer:{
    flex:1,
    padding:16
  }
});
