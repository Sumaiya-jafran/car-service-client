import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createAccount = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmail  =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,loading,createAccount,signInWithEmail,logOut
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser =>{
            const userEmail  = currentUser?.email || user?.email;
            const loggedUser  ={email:userEmail};
            setUser(currentUser);
            console.log('current user: ', currentUser);
            setLoading(false);
            if(currentUser){
                
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials: true})
                .then(res=>{
                    console.log('Token response', res.data);
                })
            }
            else{ //to clear cookie when user logging out
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                .then(res=>console.log(res.data))
            }
        })
        return ()=>{
           return unsubscribe();
        }
    },[])



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;