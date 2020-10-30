// setup for react-redux-firebase
// setup to work with firebase in react-redux project

import firebase from 'firebase/app';
// import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux';

import {
  firebaseReducer
} from 'react-redux-firebase';


 import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyD3P77dvo9qiQA1EHdBN1IxMu_YkdaQV7g",
    authDomain: "react-clientbar.firebaseapp.com",
    databaseURL: "https://react-clientbar.firebaseio.com",
    projectId: "react-clientbar",
    storageBucket: "react-clientbar.appspot.com",
    messagingSenderId: "394314632919",
    appId: "1:394314632919:web:2a8632d5aaf66577e46a92",
    measurementId: "G-M1D0JGCD5Q"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
 firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
export const store = createStore(rootReducer, initialState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}
