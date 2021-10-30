import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});   
    const [isLoading, setIsLoading] = useState(true); 
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

        // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        
        return () => unsubscribed();
    }, [])

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)                       
     }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        setUser,
        signInWithGoogle,
        logOut,
        isLoading, setIsLoading
    }
}

export default useFirebase;