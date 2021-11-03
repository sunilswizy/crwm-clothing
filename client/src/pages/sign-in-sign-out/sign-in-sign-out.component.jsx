import React from 'react';
import { SignInOut } from './sign-in-sign-out.styles';

import SignIn from '../sign-in/sign-in.component';
import Signup from '../sign-up/sign-up.component';

const Signinandsignup = ()=> {
   return <SignInOut>
            <SignIn/>
            <Signup/>
          </SignInOut>
}

export default Signinandsignup ;