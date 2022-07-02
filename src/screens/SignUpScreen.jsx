import React from "react"

import { View, Text, StyleSheet, Image } from "react-native"

import SignUp from "../components/SignUp.jsx";

export default function SignUpScreen() {
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.header}>Uber</Text>
            <Text style={styles.loginText}>Create</Text>
            <SignUp/>
            <Text style={styles.orSignInWithText}>or sign up with</Text>
            <View style={{display: "flex", flexDirection: "row", marginTop: "3em"}}>
            <View style={styles.googleContainer}>
                <Image style={styles.icon} source={require("../../assets/images/icons8-google1.svg")}/>
            </View>
            <View style={styles.facebookContainer}>
                <Image style={styles.icon} source={require("../../assets/images/dashicons_facebook-alt.svg")}/>
            </View>
            <View style={styles.twitterContainer}>
                <Image style={styles.icon} source={require("../../assets/images/carbon_logo-twitter.svg")}/>
            </View>

            <View>
                <Text style={styles.loginContainer}>Already have an account? <Text style={styles.signInTextLink}>Sign in</Text></Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: "35px",
        fontFamily: "poppins-bold",
        fontWeight: "bold",
        color: "#1E319D",
        paddingTop: "100px",
        paddingLeft: "140px"
    },

    mainContainer: {
        backgroundColor: "#ffffff",
        height: "926px",
        width: "428px"
     },

    loginText : {
        fontFamily: "poppins-bold",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#000000",
        paddingTop: "60px",
        paddingLeft: "150px"
    },

    orSignInWithText: {
        color: "000000",
        fontFamily: "poppins-bold",
        fontSize: "15px",
        fontWeight: "bold",
        paddingTop: "120px",
        textAlign: "center"
    },

    icon: {
        width: "33px",
        height: "33px",
        marginTop: "15px",
        marginLeft: "35px"
    },

    googleContainer: {
        backgroundColor: "#D9D9D9",
        borderRadius: "5px",
        width: "106px",
        height: "62px",
        marginLeft: "20px"
    },

    facebookContainer: {
        backgroundColor: "#D9D9D9",
        borderRadius: "5px",
        width: "106px",
        height: "62px",
        marginLeft: "20px"
    },
    
    twitterContainer: {
        backgroundColor: "#D9D9D9",
        borderRadius: "5px",
        width: "106px",
        height: "62px",
        marginLeft: "20px"
    },

    loginContainer: {
        fontFamily: "poppins-bold",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#000000",
        marginLeft: "-300px",
        marginTop: "100px"
    },

    signInTextLink: {
        color: "#1E319D",
        fontFamily: "poppins-bold",
        fontSize: "16px"
    }
})
