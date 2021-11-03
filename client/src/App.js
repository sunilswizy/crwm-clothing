import './App.css';

import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header/header.component';

import {Switch, Route, Redirect} from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase.utill';

import userActions from './redux/users/user.actions';
import { selectCurrentUser } from './redux/users/use.selector';

import { useSelector, useDispatch } from 'react-redux';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import NotFound from './components/not-found/notfound.componet';

//import using lazy to improve performance

const Homepage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./components/shop-list/shop.component'))
const Checkout = lazy(() => import('./pages/checkout/checkout.component'))
const ContactForm = lazy(() => import('./pages/contact/contact.component'))
const Signinandsignup = lazy(() => import('./pages/sign-in-sign-out/sign-in-sign-out.component'))

const App = () => {
  
  const currentuser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

   useEffect( () => {

    const unsubscribefromauth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
         const userRef = await createUserProfileDocument(userAuth)

         userRef.onSnapshot(Snapshot=>{
          userActions({
               id:Snapshot.id,
             ...Snapshot.data()
             }) 
         })
        }
      dispatch(userActions(userAuth));
      })
      
    return () => {
      unsubscribefromauth();
    }
  
  } , [dispatch])
    

  return (
    <div>
         <Header/>
       <ErrorBoundary>    
        <Suspense fallback={<Spinner/>}>
         <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=> currentuser ? (<Redirect to='/' />) : (<Signinandsignup/>) }/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/contact' component={ContactForm}/>
          <Route component={NotFound}/>

      </Switch>
        </Suspense>
       </ErrorBoundary>
    </div>
  );
}

export default App;
