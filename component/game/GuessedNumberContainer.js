import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../util/Constant";

function GuessedNumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const diviceWidth = Dimensions.get("window").width

export default GuessedNumberContainer;

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans",
    borderWidth: 4,
    borderColor: Colors.accent,
    padding: diviceWidth < 380 ? 18 : 24,
    margin: diviceWidth < 380 ? 18 : 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent,
    fontSize: diviceWidth < 380 ? 28 : 32,
    fontWeight: "bold",
  },
});
