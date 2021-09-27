import React from 'react';
import {Link} from 'react-router-dom'

//styles
import './header.styles.scss'
import { HeaderContainer } from './header.styles';
import { LogoContainer } from './header.styles';


import { useState } from 'react';
import {ReactComponent as Logo} from '../../assests/crown.svg'
import { auth } from '../../firebase/firebase.utill';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/users/use.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header=({currentuser,hidden})=>{
   const [visibale, change] = useState(false) //for displaying name in header

    return <HeaderContainer>
        <LogoContainer to='/'>
                <Logo className="logo"  /> <span className="logo-title">Crown</span>    
        </LogoContainer>

        <div className="options">
            <div className="option">
                 <Link to='/shop'>SHOP</Link>
            </div>
            <div className="option">
                 <Link to='/contact'>CONTACT</Link>
            </div>
            <div>{
                currentuser?
                <div className="option" onClick={()=>auth.signOut()}>
                        SIGN OUT
                </div>:
                <div className="option">
                <Link to='/signin'>SIGN IN</Link>
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

const mapStateToProps = createStructuredSelector({
    currentuser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps,null)(Header);