import React from 'react'
import {View, Text, StyleSheet} from "react-native";

const Header = () => (
    <View style = {styles.header}/>
)

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'10%',
        backgroundColor:'green',
        position:'absolute',
        top:0
    }
})

export default Header