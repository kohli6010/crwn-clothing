import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyB42qAPmNlJuvkNAYTnlR3m2gwgfjoLYhQ',
	authDomain: 'crwn-db-cda7b.firebaseapp.com',
	databaseURL: 'https://crwn-db-cda7b.firebaseio.com',
	projectId: 'crwn-db-cda7b',
	storageBucket: '',
	messagingSenderId: '824478283022',
	appId: '1:824478283022:web:0982854dbe7bf1b1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;