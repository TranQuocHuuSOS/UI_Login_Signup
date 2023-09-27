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
        marginTop: 50
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
        marginTop:40,
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
        marginTop:20,
        fontSize:15,
        marginHorizontal: 40,
       
    },
    pws:{
        flexDirection:'row',
        justifyContent:'space-between'
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
    submits:{
        backgroundColor:"black",
        padding: 10,
        borderRadius: 50,
        width: 200,
        marginTop: 20,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal: 90,
    },
    end:{
        marginVertical: 50,
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
    }
   
})
export default styles;