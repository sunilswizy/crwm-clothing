import React from 'react'; 
import {auth, createUserProfileDocument} from '../../firebase/firebase.utill';

import Custombtn from '../../components/custom-btn/custom-btn.component';
import FormInput from '../../components/form-input/form-input.component';

import './sign-up.styles.scss'

class Signup extends React.Component{
        constructor(){
            super()

            this.state={
                displayName:'',
                email:'',
                password:'',
                c_password:''
            }
        }

        handlesubmit= async (e)=>{
            e.preventDefault();  //prevent Submiting
            const {displayName, email, password, c_password} = this.state

            if(password !== c_password){
                return alert("Password and Confirm password are not same")
            }

            try{
                const {user} = auth.createUserWithEmailAndPassword(email,password)  //creating in database

                await createUserProfileDocument(user , {displayName});

                this.setState({ //after submit clearing the form
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

        handlechange=(e)=>{
            const {name, value}= e.target;

            this.setState({
                [name]:value  //dynamically updating state
            })
        }

        render(){
            const {displayName, email, password, c_password} = this.state

            return(
                <div className="sign-up">
                <h2 className="title-head">I dont have an account</h2>
                <span>Create account with email and password</span>

                <form onSubmit={this.handlesubmit} className="sign-up-form">

                    <FormInput
                     type="text"
                     name="displayName"
                     value={displayName}
                     handlechange={this.handlechange}
                     label="Display Name"
                     />

                     <FormInput
                     type="email"
                     name="email"
                     value={email}
                     handlechange={this.handlechange}
                     label="Email"
                     />

                     <FormInput 
                     type="password"
                     name="password"
                     value={password}
                     handlechange={this.handlechange}
                     label="Password"
                     />

                     <FormInput
                     type="password"
                     name="c_password"
                     value={c_password}
                     handlechange={this.handlechange}
                     label="Confirm password"
                     />

                     <Custombtn type="submit">Sign up</Custombtn>

                </form>
            </div>
            )
        }

}

export default Signup;