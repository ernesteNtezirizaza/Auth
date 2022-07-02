import React from "react"

import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-web"

import * as Yup from "yup";

import tw from "twrnc";

import { useFormik } from "formik";

export default function SignIn() {

    const initialValues = {
        email: '',
        password: ''
      }
      const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required('Email is required'),
        password: Yup.string().required('Password is required')
      })
    
      const formik = useFormik({
        initialValues,
        validationSchema
      })
    
      const { handleChange, handleBlur, values, errors, touched, isValid,getFieldProps } = formik;
    
   return (
     <View style={styles.form}>
        <TextInput type="text"
        style={styles.input}
        placeholder="Email"
        name="Email"
        placeholderStyle={{color: "#909090", fontFamily: "poppins-bold", fontSize: "14px"}}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        borderColor={touched.email && errors.email ? 'red' : 'gray'}
        /> 
        {touched.email && errors.email && <Text style={tw`text-red-500 ml-10 font-bold font`}>{errors.email}</Text>}
        <br/>

        <TextInput type="password"
        style={styles.input}
        placeholder="Password"
        name="password"
        placeholderStyle={{color: "#909090", fontFamily: "poppins-bold", fontSize: "14px"}}
        secureTextEntry={true}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        borderColor={touched.password && errors.password ? 'red' : 'gray'}
        /> 
        {touched.password && errors.password && <Text style={tw`text-red-500`}>{errors.password}</Text>}
        <br/>

         <TouchableOpacity style={styles.button}>
            <Text style={styles.signInText}>Sign in</Text>
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

    signInText: {
        color: "#FFFFFF",
        fontFamily: "poppins-bold",
        fontWeight: "bold",
        fontSize: "14px",
        textAlign: "center"
    }
})
