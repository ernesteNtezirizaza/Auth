import React from "react"

import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-web"

export default function SignUp() {
   return (
     <View style={styles.form}>
          <TextInput type="text" style={styles.input}  placeholder="Username" name="username" placeholderStyle={{color: "#909090", fontFamily: "poppins-bold", fontSize: "14px"}} /> <br/>
         <TextInput type="text" style={styles.input}  placeholder="Email" name="email" placeholderStyle={{color: "#909090", fontFamily: "poppins-bold", fontSize: "14px"}} /> <br/>
         <TextInput type="password" style={styles.input} placeholder="Password" name="password" placeholderStyle={{color: "#909090", fontFamily: "poppins-bold", fontSize: "14px"}} secureTextEntry={true} /> <br/>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.signUpText}>Sign up</Text>
         </TouchableOpacity>
     </View>
   )
}

const styles = StyleSheet.create({
    form: {
        width: "380px",
        height: "219px",
        backgroundColor: "#FFFFFF",
        paddingTop: "30px"
    },

    input: {
        backgroundColor: "rgba(217, 217, 217, 0.3)",
        borderRadius: "10px",
        width: "360px",
        height: "61px",
        marginLeft: "20px",
        padding: "20px"
    },

    button: {
        backgroundColor: "#1E319D",
        borderRadius: "10px",
        width: "360px",
        height: "61px",
        padding: "20px",
        marginLeft: "20px",
    },

    signUpText: {
        color: "#FFFFFF",
        fontFamily: "poppins-bold",
        fontWeight: "bold",
        fontSize: "14px",
        textAlign: "center"
    }
})
