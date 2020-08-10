import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Button} from "react-native";

const Class = () => (
    <View style = {styles.class}>
        <View style = {styles.quickInfo}>
            <Text>
                Fecha
            </Text>
            <Text>
                Clase
            </Text>
        </View>
        <Button onPress={() => console.log('yay')} title={'seleccionar'}/>
    </View>
)

const styles = StyleSheet.create({
    class:{
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    quickInfo:{
    }
})

export default Class

