import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Uber</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#1E319D',
        width: "428px",
        height: "926px"
    },

    heading : {
        color : '#FFFFFF',
        fontFamily: 'poppins-bold',
        fontWeight: 'bold',
        fontSize: '50px',
        paddingTop: '400px',
        paddingLeft: '140px'
    }
})


export default HomeScreen