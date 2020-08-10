import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {KeyboardAvoidingView} from "react-native";
import { reduxForm, Field } from 'redux-form';
import {connect} from "react-redux";
//import Carousel from "react-native-snap-carousel";

import FormTextInput from "../FormTextInput";
import Button from "../Button";
import cafeteria from '../../assets/cafeteria.jpg'

const Registry = () => {
    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image source = {item} styles = {styles.imageContainer}/>
            </View>
        );
    }
    return(
        <View style = {styles.global}>
            <View style={styles.imageContainer}>
                <Image source = {cafeteria} style = {styles.image}/>
            </View>
            <KeyboardAvoidingView style = {styles.container}>
                <View style = {styles.elements}>
                    <Text>Ingreso</Text>
                    <Field
                        name = {'email'}
                        component={FormTextInput}
                        keyboardType='email-address'
                        placeholder={'Email'}
                        autoCapitalize='none'
                        returnKeyType='next'
                    />
                    <Field
                        name = {'password'}
                        component={FormTextInput}
                        secureTextEntry={true}
                        placeholder={'Password'}
                        autoCapitalize='none'
                        returnKeyType='next'
                    />
                    <Button label={'Entrar'} disabled={false}/>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F5F5',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#000000',
        position:'absolute',
        right:'10%',
        top:'35%',
        height:'25%',
        width:'10%',
        flexDirection:'column'
    },
    elements:{
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:'10%'
    },
    image:{
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    imageContainer:{
        width:'50%',
        height:'50%',
        position:'absolute',
        left:0
    },
    global:{
        height:'100%',
        width:'100%'
    }
})

export default reduxForm({
    form:'logIn'
})(connect(undefined, undefined)(Registry)
)