import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { configureStore } from './src/store';
const { store, persistor } = configureStore();

import Class from "./src/components/Class";
import Registry from "./src/components/Registry";
import Header from "./src/components/Header";
import NewAccount from "./src/components/NewAccount";

const App = ()=>(
    <Provider store = {store}>
        <Router>
            <View style={styles.container}>
                <Header/>
                <Switch>
                    <Route path = '/' exact component = {Registry}/>
                    <Route path = '/register' exact component={NewAccount}/>
                </Switch>
            </View>
        </Router>
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