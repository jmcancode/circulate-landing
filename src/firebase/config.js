import firebase from "firebase/app";

import "firebase/firestore";
import 'firebase/messaging'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const messaging = firebase.messaging();
const {REACT_APP_VAPID_KEY} = process.env
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async(setTokenFound) => {
    let currentToken = '';

    try {
        currentToken = await messaging.getToken({vapidKey: publicKey});
        if (currentToken) {
            setTokenFound(true);
        } else {
            setTokenFound(false)
        }
    } catch (err) {
        console.warn("An error occurred while retrieving token.", err);
    }

    return currentToken;
}

export const onMessageListener = () => new Promise((resolve) => {
    messaging.onMessage((payload) => {
        resolve(payload);
    })
})

export const db = app.firestore();

firebase
    .firestore()
    .settings({timestampsInSnapshots: true});

export default app;
