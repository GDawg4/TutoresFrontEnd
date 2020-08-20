import React from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView} from "react-native";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';


import FormTextInput from "../FormTextInput";
import Button from "../Button";

const formValue = formValueSelector('signUp');

const NewAccount = (
    {startSignUp}
) => (
    <View style = {styles.global}>
        <View style = {{width:'10%', position: 'absolute', top:0}}>
            <Link to='/'>
                <Button label={'Regresar'}/>
            </Link>
        </View>
        <KeyboardAvoidingView style = {styles.infoContainer}>
            <View style = {styles.elements}>
                <Text>Ingresa tus datos</Text>
                <Field
                    name = {'newAccountEmail'}
                    component={FormTextInput}
                    placeholder={'Email'}
                    autoCapitalize='none'
                    returnKeyType='next'/>
                <Field
                    name = {'newAccountPassword1'}
                    component={FormTextInput}
                    placeholder={'Ingrese su contraseña'}
                    autoCapitalize='none'
                    returnKeyType='next'/>
                <Field
                    name = {'newAccountPassword2'}
                    component={FormTextInput}
                    placeholder={'Password'}
                    autoCapitalize='none'
                    returnKeyType='next'/>
                <Button label={'Crear nueva cuenta'} onPress={startSignUp}/>
            </View>
        </KeyboardAvoidingView>
    </View>
)

const styles = StyleSheet.create({
    global:{
        height:'90%',
        width:'100%'
    },
    infoContainer:{
        position:'absolute',
        right:'5%',
        top:'35%',
        height:'contain',
        width:'50%',
        flexDirection:'column',
        borderRadius:'5%',
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#F5F5F5'
    },
    elements:{
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:'10%'
    }
})

export default reduxForm({
    form:'signUp',

})(connect(
    state => ({
        currentEmail:formValue(state, 'newAccountEmail'),
        currentPassword1:formValue(state, 'newAccountPassword1'),
        currentPassword2:formValue(state, 'newAccountPassword2'),
    }),
    dispatch => ({
        startRegister(newAccountEmail,newAccountPassword1){
            dispatch(actions.startRegister(newAccountEmail,newAccountPassword1))
        }
    }),
    (stateProps, dispatchProps) => ({
        currentEmail:stateProps.newAccountEmail,
        currentPassword:stateProps.newAccountPassword1,
        startRegister(){
            dispatchProps.startRegister(stateProps.currentEmail, stateProps.currentPassword)
        }
    })
    )(NewAccount))