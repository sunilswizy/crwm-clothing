import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input.component';
import Custombtn from '../../components/custom-btn/custom-btn.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utill'

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handlesubmit = async (e)=>{
         e.preventDefault();
        const {email, password} = this.state;

        try{
         await auth.signInWithEmailAndPassword(email, password); //checking in database for this email and password
         this.setState({email:'',password:''})

        }

        catch(error){
            console.log("Error in sign in "+error)
        }

    }

    handlechange=(e)=>{
        const {name,value}=e.target;

        this.setState({[name]:value})
    }

    render(){
        const {email,password}=this.state;

        return(
            <div className="sign-in">
                <h2 className="title-head">I already have an account!</h2>
                <span>sign in with your email and password</span>
            <form onSubmit={this.handlesubmit}>
                <FormInput 
                type="email" 
                value={email} 
                handlechange={this.handlechange} 
                name="email"
                label="Email"/>

                <FormInput 
                type="password" 
                value={password}  
                handlechange={this.handlechange} 
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
}

export default SignIn;