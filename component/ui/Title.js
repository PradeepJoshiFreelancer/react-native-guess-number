import { StyleSheet, Text } from "react-native";
import Colors from "../util/Constant";

function Title({children}){
    return (<Text style={styles.title}>{children}</Text>)
}
export default Title

const styles = StyleSheet.create({
    title:{
        fontFamily:"open-sans-bold",
        fontSize:25,
        color: "white",
        textAlign:"center",
        borderColor: "white",
        borderWidth:2,
        padding:12
        

    }
})