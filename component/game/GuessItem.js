import { StyleSheet, Text, View } from "react-native";
import Colors from "../util/Constant";

function GuessItem({ roundNumber, guessedNumber }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>Round: #{roundNumber}</Text>
      <Text style={styles.itemText}>Guessed number: {guessedNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

export default GuessItem;
