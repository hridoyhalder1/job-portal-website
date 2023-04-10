import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        return signOut(auth);
    }
    // update user/name
    const updateUser = ( userInfo ) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    // signIn with Google
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // onState Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing!');
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])
    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        providerLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;