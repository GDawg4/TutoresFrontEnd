import React from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { reduxForm, Field } from 'redux-form';
import {connect} from "react-redux";
//import Carousel from "react-native-snap-carousel";
import {Link} from "react-router-dom";

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
                    <Text style = {styles.inputTitle}>Ingreso</Text>
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
                    <Link to='/register'>
                        <Text style = {styles.smallPrint}>Registrarse</Text>
                    </Link>
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
        top:'30%',
        height:'40%',
        width:'20%',
        flexDirection:'column'
    },
    elements:{
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:'10%'
    },
    image:{
        height:'100%',
        width: "100%",
        resizeMode: "cover",
        alignSelf: "center",
        position:'absolute',
        left:0,
        blurRadius:30,
        opacity:'90%'
    },
    imageContainer:{
        width:'100%',
        height:'100%',
        position:'absolute',
        left: 0,
        top: '5%'
    },
    global:{
        height:'91%',
        width:'100%',
        alignItems:'center'
    },
    inputTitle:{
        fontWeight:'bold'
    },
    smallPrint:{
        fontSize:'small',
        fontColor:'blue',
        textAlign:'center',
        marginBottom:'5%'
    }
})

export default reduxForm({
    form:'logIn'
})(connect(undefined, undefined)(Registry)
)