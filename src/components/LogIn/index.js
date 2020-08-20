import React from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { reduxForm, Field, formValueSelector } from 'redux-form';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import FormTextInput from "../FormTextInput";
import Button from "../Button";
import cafeteria from '../../assets/cafeteria.jpg'
import * as actions from '../../actions/auth'
import logouvg from '../../assets/logo.png'

const formValue = formValueSelector('logIn');

const Registry = ({startLogin}) => {
    return(
        <View style = {styles.global}>
            
        <View style = {{width: '100%', height: '10%', position: "relative", backgroundColor:'#454545', marginTop:'0'}}>
        <Image style = {{width: '20%', height: '100%'}} source={logouvg} />
        </View>
        <View style = {{width: '100%', height: '3%', position: "relative", backgroundColor:'#078b45', marginTop:'0'}}>
        </View>
        <View style={styles.imageContainer}>
            <Image source = {cafeteria} style = {styles.image}/>
        </View>
        
        <View style={{flex: 1, flexDirection: 'column', width: '100%', height: '100%'}}>

            <View style={{display: 'flex', alignItems: 'center', paddingTop: '10%', paddingBottom: '4%'}}> 
            <Text style={{width: '80%', color: '#FFFFFF', textAlign: 'center' }}>Tutorías en línea para la Universidad del Valle de Guatemala</Text>
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
                <Button label={'INICIAR SESIÓN'} disabled={false} remove={true} onPress={startLogin} greencolor={true}/>


                </View>
            </KeyboardAvoidingView>

            <View style={styles.buttonRegister}>
            <Button style={{padding:0, border: '0%'}} label={'REGISTRARSE'} disabled={false} remove={true} onPress={startLogin} greencolor={false}>
                <Link to='/register'>
                <Text style = {styles.smallPrint}  greencolor={true}>Registrarse</Text>
                </Link>
            </Button>
            </View>
        
        </View>
        <View style = {{width: '100%', height: '8%', position: "absolute", backgroundColor:'#454545', bottom: '0'}}>
        </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F5F5',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#000000',
        position:'relative',
        width: '60%',
        height: '50%',
        flexDirection:'column',
        alignSelf: 'center',
        opacity: '0.9',
        borderColor: 'white'
        
    },
    buttonRegister: {
        width: '40%', 
        height: '2%', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        alignSelf: 'center', 
        paddingTop: '10%',
        padding: 0
    },
    tinyLogo: {
        width: 50,
        height: 50,
        position: 'relative'
    },
    elements:{
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'10%',
        flex: 1
    },
    image:{
        height:'92.5%',
        width: "100%",
        top: '7.5%',
        resizeMode: "cover",
        alignSelf: "center",
        position:'absolute',
        left:0,
        filter: 'blur(1px)',
        overflow: 'hidden'
    },
    imageContainer:{
        width:'100%',
        height:'100%',
        position:'absolute',
        left: 0,
        top: '5%',
        flex: 2
    },
    global:{
        height:'100%',
        width:'100%',
        alignItems:'center'
    },
    inputTitle:{
        fontWeight:'bold'
    },
    smallPrint:{
        fontSize:'small',
        fontColor:'blue',
        textAlign:'center'
    },
    buttons: {
        color: '#FF0000'
    },
    letters: {
        fontColor: '#FFFFFF'
    }
})

export default reduxForm({
    form:'logIn'
})(connect(
    state => ({
        currentEmail:formValue(state, 'email'),
        currentPassword:formValue(state, 'password')
    }),
    dispatch => ({
        startLogin(email, password){
            dispatch(actions.startLogin(email, password))
        }
    }),
    (stateProps, dispatchProps) => ({
        currentEmail:stateProps.currentEmail,
        currentPassword:stateProps.currentPassword,
        startLogin(){
            dispatchProps.startLogin(stateProps.currentEmail, stateProps.currentPassword)
        }
    })
    )(Registry))