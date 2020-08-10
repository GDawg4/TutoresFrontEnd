import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";

import { configureStore } from './src/store';
const { store, persistor } = configureStore();

import Class from "./src/components/Class";
import Registry from "./src/components/Registry";
import Header from "./src/components/Header";
import {NativeRouter, Route} from "react-router-native";
import NewAccount from "./src/components/NewAccount";

const App = ()=>(
    <Provider store = {store}>
        <View style={styles.container}>
            {/*<Text>Open up App.js to start working on your app!</Text>*/}
            <Header/>
            <StatusBar style="auto" />
            <NativeRouter>
                <Route
                    exact path='/registry'
                    component = {NewAccount}/>

                <Route
                    exact path='/login'
                    component = {Registry}/>
            </NativeRouter>
            <Registry/>
        </View>
    </Provider>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App