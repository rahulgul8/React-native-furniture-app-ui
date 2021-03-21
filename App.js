import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppNavigator from './src/navigations/Navigator'
import { AppLoading } from 'expo';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux';

const fbConfig = {}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase: firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}

export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Bold': require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium': require('./src/fonts/Montserrat-Medium.otf'),
      'Regular': require('./src/fonts/Montserrat-Regular.otf'),
      'Title': require('./src/fonts/carnavonts.otf'),
    });
    this.setState({ isFontLoaded: true })
  }
  render() {
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator />) : (<AppLoading />)
    );
  }

}

