import React from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView} from "react-native";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

import FormTextInput from "../FormTextInput";
import Button from "../Button";

const NewAccount = () => (
    <View style = {styles.global}>
        <View style = {{width:'10%', position: 'absolute', top:0}}>
            <Button label={'Regresar'}/>
        </View>
        <KeyboardAvoidingView style = {styles.infoContainer}>
            <View style = {styles.elements}>
                <Text>Ingresa tus datos</Text>
                <Field
                    name = {'newAccountLastName'}
                    component={FormTextInput}
                    placeholder={'Nombre'}
                    autoCapitalize='none'
                    returnKeyType='next'/>
                <Field
                    name = {'newAccountName'}
                    component={FormTextInput}
                    placeholder={'Apellido'}
                    autoCapitalize='none'
                    returnKeyType='next'/>
                <Button label={'Crear nueva cuenta'} onPress={() => console.log('hola')}/>
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
    form:'NewAccount',

})(
    connect(undefined, undefined)(NewAccount)
)