import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        
    formContext: {
        flex: 1 ,
        backgroundColor : "#ffffff",
        borderTopLeftRadius : 30 ,
        borderTopRightRadius : 30,  
        paddingTop: 20,
    },
    form:{
        width:"100%",
    },

    formLabel:{
        color:"#000000",
        fontSize: 18 ,
        paddingLeft : 20 ,
    },

    input: {
        width:"90%",
        borderRadius: 50 ,
        backgroundColor: "#00FFFF",
        height: 40 ,
        margin: 12 ,
        paddingLeft: 10 ,
    },
    
    textButtonCalculator: {
        fontSize: 20 ,
        color: "#ffffff",

    },

    buttonCalculator:{
        borderRadius: 50 ,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14 ,
        paddingBottom: 14 ,
        marginLeft: 12 ,
        margin : 30 ,

    },
    errorMessage:{
        fontSize:12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },

    exibitionResultImc:{
        width:"100%",
        height: "50%",
    },

    resultImcItem:{

    },

    textResultItemList:{

    }

  
});

export default styles