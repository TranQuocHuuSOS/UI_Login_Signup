import { StyleSheet } from "react-native";
import color from "../../../assets/colors/color";
const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        flex: 1
    },
    homescreen:{
        fontSize: 40,
        color: "white",
        maxWidth: 200,
        marginHorizontal: 20,   
    },
    title1:{
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        maxWidth: 300
    },
    button_signup:{
        marginTop: 250,
        backgroundColor: "black",
        marginHorizontal: 53,
        padding: 10,
        borderRadius: 20,
        fontSize: 20
    },
    signup:{
        padding: 10,
        marginHorizontal: 53,
        borderRadius: 50
    },
    confirm:{
        alignItems:"center",
        justifyContent:"center",
        fontSize: 15,
        color:'white',
        marginVertical: 10
    },
    confirm_account:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row'
    },
    
})
export default styles;