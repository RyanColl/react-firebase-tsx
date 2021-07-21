
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDBSn5qYCcjKc3ETrVLJLTxgsnsOt4QSUw',
    authDomain: 'react-firebase-aeaec.firebaseapp.com',
    databaseURL: 'https://react-firebase-aeaec-default-rtdb.firebaseio.com/',
    projectId: 'react-firebase-aeaec',
    storageBucket: 'gs://react-firebase-aeaec.appspot.com',
    messagingSenderId: '1076784955395',
    appId: '1:1076784955395:android:6f7d665a1a476b3f9cce36',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
