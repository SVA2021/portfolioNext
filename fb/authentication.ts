import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInAnonymously,
    signInWithPopup,
    signOut
} from '@firebase/auth';
import {app} from './firebaseConfig';

export const authentication = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(authentication, new GoogleAuthProvider());

export const signInAnonymous = () => signInAnonymously(authentication);

export const logOut = () => signOut(authentication);