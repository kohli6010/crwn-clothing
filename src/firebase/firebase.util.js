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

//creating user profile 💯 
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	// getting the user reference(queryReference) document from user collection 👽 
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	
	// getting a snapshot(querySnapshot) from user reference 👍
	const snapShot = await userRef.get();
	
	// checking if anything exists ❕
	if (!snapShot.exists) { 
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) { 
			console.log(`Erorr occured: ${error}` )
		}
	}

	return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;