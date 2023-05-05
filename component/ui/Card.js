import { StyleSheet, View } from "react-native";
import Colors from "../util/Constant";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary500,
        //andriod only for shadow
        elevation: 8,
        //ios specfic for shadow
        shadowColor: "black",
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})