import React from 'react';
import {Link} from 'react-router-dom'

//styles
import './header.styles.scss'
import { HeaderContainer } from './header.styles';
import { LogoContainer } from './header.styles';


import { useState } from 'react';
import {ReactComponent as Logo} from '../../assests/crown.svg'
import { auth } from '../../firebase/firebase.utill';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/users/use.selector';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header=()=>{
   const [visibale, change] = useState(false) //for displaying name in header

   const currentuser = useSelector(selectCurrentUser)
   const hidden = useSelector(selectCartHidden)

    return <HeaderContainer>
        <LogoContainer to='/'>
                <Logo className="logo"  /> <span className="logo-title">Crown</span>    
        </LogoContainer>

        <div className="options">
            <div className="option">
                 <NavLink to='/shop' activeStyle={{color:"black", fontWeight: "bolder"}}>SHOP</NavLink>
            </div>
            <div className="option">
                 <NavLink to='/contact' activeStyle={{color:"black", fontWeight: "bolder"}}>CONTACT</NavLink>
            </div>
            <div>{
                currentuser?
                <div className="option" onClick={()=>auth.signOut()}>
                        SIGNOUT
                </div>:
                <div className="option">
                <NavLink to='/signin' activeStyle={{color:"black", fontWeight: "bolder"}}>SIGNIN</NavLink>
                </div>
            }
            </div>
                <div className="option">
                    <CartIcon/>
               </div>

             <div onMouseOver={()=>change(true)} onMouseOut={()=> change(false)}> 
                 { //change state based on events
                currentuser?

                        currentuser.photoURL ?
                      
                      ( <div className="option">
                        <Link to='/'>       
                       <img src ={currentuser.photoURL} alt="Profile" className="profile-img"/>
                       </Link>
                     </div>)
                     :
                      (<div className="option">
                        <Link to='/'><i className="fas fa-user-circle user-icon"></i></Link>
                      </div> )

                       :

                       <div className="option">
                        <Link to='/signin'><i className="fas fa-user-circle user-icon"></i></Link>
                      </div>   
                 }
            </div>
            <div style={{display:`${visibale ? "block" : "none"}`}}> 
         {
    currentuser?
    <div className="profile-name">
     <p> {currentuser.displayName}</p>
     </div>
     :null
      }
        </div>
            { 
             hidden ? 
             (<CartDropdown/>)
               :
               null
              }
    </div>
</HeaderContainer>
}


export default Header