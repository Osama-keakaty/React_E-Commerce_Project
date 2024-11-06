
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    doc,
    getDoc,
    setDoc,
    getFirestore
} from 'firebase/firestore'

//! bring our firebase sentance data
const firebaseConfig = {
    apiKey: "AIzaSyCwSXH9yoZnoVi2U0aKtj6nkbxo51G1l7I",
    authDomain: "crwn-clothing-db-f2078.firebaseapp.com",
    projectId: "crwn-clothing-db-f2078",
    storageBucket: "crwn-clothing-db-f2078.firebasestorage.app",
    messagingSenderId: "659735904901",
    appId: "1:659735904901:web:72985ea75776aec2d55fec"
};

//! Initialize Firebase
initializeApp(firebaseConfig);


//! build sign-in application using google provider
// create google provider with specific parameters
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
// create the auth (it is a singleton in application and keeps track the auth in this variable)
export const auth = getAuth();

// create a sign in with popup 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//! insert a user data 
// initialize our db 
export const db = getFirestore();
// create an async function to check if this is doc is exist and otherwise create one  
export const createUserDocumentFromAuth = async (userAuth, additional = {}) => {
    // if we didn't recieve userAuth don't run the function 
    if (!userAuth) return;
    // create a document reference 
    const userDocRef = doc(db, "users", userAuth.uid);
    // fetch the user from the reference 
    const userSnapshot = await getDoc(userDocRef);
    // check if that user with that id exist 
    if (!userSnapshot.exists()) {
        // if Not, create a user's doc by taking the user's name and email 
        const { displayName, email } = userAuth;
        // and determine the time that he loged in.
        const createdAt = new Date();

        try {
            // create a doc that userDocRef determined it and save his name and email and login time 
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                //the additional object must contain the same the previous values name (displayName , email)
                ...additional
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    // return the new or exist user 
    return userDocRef
};


//! build sign up task
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // if we didn't recieve email or password, don't run the function 
    if (!email || !password) return;
    // create user 
    try {

        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        alert(error.message)
    }
};

//! build sign in with email and password task
export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log("error", error.message)
    }
}


//! build sign out task
export const signOutUser = async () => {
    try {
        return await signOut(auth);
    } catch (error) {
        console.log("error", error.message)
    }
}



