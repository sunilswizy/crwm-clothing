import React from 'react'; 
import {auth, createUserProfileDocument} from '../../firebase/firebase.utill';

import Custombtn from '../../components/custom-btn/custom-btn.component';
import FormInput from '../../components/form-input/form-input.component';

import { useState } from 'react';

import './sign-up.styles.scss'

const Signup = () =>{

        const [userCredentials, setCredentials] = useState({
                displayName:'',
                email:'',
                password:'',
                c_password:''
        })

        const {displayName, email, password, c_password} = userCredentials


      const handlesubmit= async (e)=>{
            e.preventDefault();  //prevent Submiting

            if(password !== c_password){
                return alert("Password and Confirm password are not same")
            }

            try{
                const {user} = auth.createUserWithEmailAndPassword(email,password)  //creating in database

                await createUserProfileDocument(user , {displayName});

                setCredentials({ //after submit clearing the form
                    displayName:'',
                    email:'',
                    password:'',
                    c_password:''
                })
            }
            catch(error){
                console.log("Error occured "+error)
            }
        }

        const handlechange=(e)=>{
            const {name, value}= e.target;

            setCredentials({...userCredentials ,
                [name]:value  //dynamically updating state
            })
        }


            return(
                <div className="sign-up">
                <h2 className="title-head">I dont have an account</h2>
                <span>Create account with email and password</span>

                <form onSubmit={handlesubmit} className="sign-up-form">

                    <FormInput
                     type="text"
                     name="displayName"
                     value={displayName}
                     handlechange={handlechange}
                     label="Display Name"
                     />

                     <FormInput
                     type="email"
                     name="email"
                     value={email}
                     handlechange={handlechange}
                     label="Email"
                     />

                     <FormInput 
                     type="password"
                     name="password"
                     value={password}
                     handlechange={handlechange}
                     label="Password"
                     />

                     <FormInput
                     type="password"
                     name="c_password"
                     value={c_password}
                     handlechange={handlechange}
                     label="Confirm password"
                     />

                     <Custombtn type="submit">Sign up</Custombtn>

                </form>
            </div>
            )
        }


export default Signup;