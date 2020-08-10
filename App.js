import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";

import { configureStore } from './src/store';
const { store, persistor } = configureStore();

import Class from "./src/components/Class";
import Registry from "./src/components/Registry";

const App = ()=>(
    <Provider store = {store}>
        <View style={styles.container}>
            {/*<Text>Open up App.js to start working on your app!</Text>*/}
            <StatusBar style="auto" />
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