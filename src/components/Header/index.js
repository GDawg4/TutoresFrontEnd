import React from 'react'
import {View, Text, StyleSheet} from "react-native";

const Header = () => (
    <View style = {styles.header}>
        <Text>Hola</Text>
    </View>
)

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'10%',
        backgroundColor:'green'
    }
})

export default Header