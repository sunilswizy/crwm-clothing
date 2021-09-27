import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyBcpWxqkvH2By2x-AadqANXHX7uDkY6FNU",
    authDomain: "crwn-clothing-93193.firebaseapp.com",
    projectId: "crwn-clothing-93193",
    storageBucket: "crwn-clothing-93193.appspot.com",
    messagingSenderId: "99688462988",
    appId: "1:99688462988:web:abaadddf8df345ebd1d9a9",
    measurementId: "G-5VQG2TMBXY"
  };


  export const createUserProfileDocument = async (userAuth, additionaldata)=>{
      if(!userAuth) return;

      const userRef =  firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get();

      // if user doest exits create a user

      if(!snapShot.exists){
        const {displayName, email, photoURL} = userAuth;
        const createdat = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdat,
            photoURL,
            ...additionaldata
          })
            
        }
        catch(error){
            console.log("Error creating user "+error.message)
        }
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const addCollectionAndDocuments =async (collectionKey, objectToAdd) =>{
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    })

    return await batch.commit()
  }  

  export const convertCollectionSnapshotToMap = collection =>{
      const transformedCollection = collection.docs.map( doc => {
          const {items, title} = doc.data()

          return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
          }
      })
      return transformedCollection.reduce((accumulator, collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {})
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' }); //google sign popup
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;
