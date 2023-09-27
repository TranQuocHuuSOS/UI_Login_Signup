import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
    container:{
        flex: 1,

    },
    image:{
        flex: 1
    },
    body:{
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 30,
        color: "white",
        marginTop: 20
    },
    access:{
        marginVertical: 20,
        padding: 10,
        backgroundColor:"black",
        borderRadius: 50,
        flexDirection:'row',
        alignItems:'center'
    },
    email:{
        fontSize: 15,
    },
    user:{
        marginTop:20,
        fontSize:15,
        marginHorizontal: 40,
    },
    input:{
        padding: 10,
        backgroundColor:"white",
        borderRadius:50,
        marginVertical: 10
    },
    pw:{
        marginTop:5,
        fontSize:15,
        marginHorizontal: 40,
    },
    password:{
        padding: 10,
        backgroundColor:"white",
        borderRadius:50,
        marginVertical: 10
    },
    text:{
        fontSize: 15,
    },
    end:{
        marginVertical: 10,
        marginHorizontal: 40
    },
    an_account:{
        color:"white",
        fontSize: 15,
    },
    submit:{
        color:"black",
        fontSize:15,
        marginLeft: 50
    },
    create:{
        backgroundColor:"black",
        padding: 10,
        borderRadius: 50,
        width: 200,
        marginHorizontal: 40,
        marginTop: 30
    }
   
})
export default styles;