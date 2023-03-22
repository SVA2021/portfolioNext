import React, {createContext, useEffect, useState} from 'react'
import {onAuthStateChanged, User} from '@firebase/auth';
import {authentication, signInAnonymous} from "@/fb/authentication";

const initialUser: any = null;

const AuthContext = createContext({
    user: initialUser,
    loading: true
})

export function AuthContextProvider({children}: any) {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        if (!user) signInAnonymous();

        let unsubscribe;

        unsubscribe = onAuthStateChanged(authentication, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;