import app from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYsO78Wrqh3qPCAecbtSi1avdmWd9gI9Y",
    authDomain: "react-swapi-12512.firebaseapp.com",
    databaseURL: "https://react-swapi-12512.firebaseio.com",
    projectId: "react-swapi-12512",
    storageBucket: "react-swapi-12512.appspot.com",
    messagingSenderId: "657334762364",
    appId: "1:657334762364:web:15058a03473e91aa4a42f9",
    measurementId: "G-BYTKEHHWS6"
};

// Initialize Firebase
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        // app.analytics();
    }

    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut = () => this.auth.signOut();
}

export default Firebase;