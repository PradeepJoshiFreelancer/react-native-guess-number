import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Title from "../component/ui/Title";
import Colors from "../component/util/Constant";
import PrimaryButton from "../component/ui/PrimaryButton";

function GameOver({roundNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.textSummary}>
        Your phone took <Text style={styles.textHighlights}>{roundNumber}</Text> moves to
        reach to <Text style={styles.textHighlights}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const deviceWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 16,
    borderColor: Colors.primary800,
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textSummary: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom:24
  },
  textHighlights: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
