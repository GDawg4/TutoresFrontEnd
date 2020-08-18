import React from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { reduxForm, Field, formValueSelector } from 'redux-form';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import FormTextInput from "../FormTextInput";
import Button from "../Button";
import cafeteria from '../../assets/cafeteria.jpg'
import * as actions from '../../actions/auth'
import logouvg from '../../assets/logo.jpg'

const formValue = formValueSelector('logIn');

const Registry = ({startLogin}) => {
    return(
        <View style = {styles.global}>
            <Image
                style={styles.tinyLogo}
                source={logouvg}
            />

            <View style={styles.imageContainer}>
                <Image source = {cafeteria} style = {styles.image}/>
            </View>
            
            <View style={{flex: 1, flexDirection: 'column', width: '100%', height: '100%'}}>
                <View> Tutorías en línea para la Universidad del Valle de Guatemala</View>
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
                    <Button label={'REGISTRARSE'} disabled={false} remove={true} onPress={startLogin} greencolor={false}>
                    <Link to='/register'>
                    <Text style = {styles.smallPrint}  greencolor={true}>Registrarse</Text>
                    </Link>
                </Button>

                    </View>
                </KeyboardAvoidingView>


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
        alignSelf: 'center'
        
    },
    tinyLogo: {
        width: 50,
        height: 50,
        top: '-4%',
        left: '-42%'
    },
    elements:{
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'10%',
        flex: 1
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
        top: '5%',
        flex: 2
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
    },
    buttons: {
        color: '#FF0000'
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