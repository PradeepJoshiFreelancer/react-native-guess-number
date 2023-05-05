import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../component/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../component/util/Constant";
import Title from "../component/ui/Title";
import Card from "../component/ui/Card";
import InstructionText from "../component/ui/InstructionText";

function StartGame({ onNumberSelected }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberChangeHandler = (enteredNumberText) => {
    setEnteredNumber(enteredNumberText);
  };
  const resetEnteredNumber = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const enteredValue = parseInt(enteredNumber);
    if (isNaN(enteredValue) || enteredValue < 1 || enteredValue > 99) {
      Alert.alert("Invalid Number", "Please enter a number between 1 - 99", [
        { text: "Okay", onPress: resetEnteredNumber, style: "destructive" },
      ]);
      return;
    }
    onNumberSelected(enteredValue);
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={enteredNumberChangeHandler}
              value={enteredNumber}
            />
            <View style={styles.actionContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetEnteredNumber}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    color: Colors.accent,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
  },
  actionContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
