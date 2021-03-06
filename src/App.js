import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './components/shop-list/shop.component';
import Header from './components/Header/header.component';
import Checkout from './pages/checkout/checkout.component';
import ContactForm from './pages/contact/contact.component';

import {Switch, Route, Redirect} from 'react-router-dom'
import Signinandsignup from './pages/sign-in-sign-out/sign-in-sign-out.component';
import React from 'react';

import { auth, createUserProfileDocument } from './firebase/firebase.utill';
import { connect } from 'react-redux';
import userActions from './redux/users/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/users/use.selector';

class App extends React.Component {
  
  unsubscribefromauth = null;

  componentDidMount(){

  const {userActions} = this.props;

    this.unsubscribefromauth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
         const userRef = await createUserProfileDocument(userAuth)

         userRef.onSnapshot(Snapshot=>{
          userActions({
               id:Snapshot.id,
             ...Snapshot.data()
             }) 
         })
        }
      userActions(userAuth);
      }
    )};
    

  componentWillUnmount(){
    this.unsubscribefromauth(); // if user logouts
  }

  render(){
    const {currentuser} = this.props;
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signin' render={()=> currentuser ? (<Redirect to='/' />) : (<Signinandsignup/>) }/>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/contact' component={ContactForm}/>
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentuser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  userActions: user => dispatch(userActions(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
