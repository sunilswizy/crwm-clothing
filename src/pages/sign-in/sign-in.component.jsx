import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input.component';
import Custombtn from '../../components/custom-btn/custom-btn.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utill';

import { useState } from 'react';

const SignIn = () => {
  
    const [userCredentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const {email, password} = userCredentials

   const handlesubmit = async (e)=>{
         e.preventDefault();

        try{
         await auth.signInWithEmailAndPassword(email, password); //checking in database for this email and password
         setCredentials({email:'', password:''})

        }

        catch(error){
            console.log("Error in sign in "+error)
        }

    }

   const handlechange=(e)=>{
        const {name,value}=e.target;

        setCredentials({...userCredentials ,[name]:value})
    }

        return(
            <div className="sign-in">
                <h2 className="title-head">I already have an account!</h2>
                <span>sign in with your email and password</span>
            <form onSubmit={handlesubmit}>
                <FormInput 
                type="email" 
                value={email} 
                handlechange={handlechange} 
                name="email"
                label="Email"/>

                <FormInput 
                type="password" 
                value={password}  
                handlechange={handlechange} 
                name="password"
                label="Password"/>
                
                <div className="btn-group">
                <Custombtn type="submit">Sign in</Custombtn>
                <Custombtn type="button" onClick={signInWithGoogle} googlesign>Sign in with Google</Custombtn>
                </div>
            </form>
            </div>
        )
    }


export default SignIn;