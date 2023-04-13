import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
const LogIn = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    // console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }
    const handleGoogleSignOut = () =>{
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {
                user ?    <button onClick={handleGoogleSignOut}> Sign Out </button> :
                <div>
                     <button onClick={handleGoogleSignIn}> google log in</button>
                     <button onClick={handleGitHubSignIn}> git hub in</button>
                </div> 
               

            }
       
        
          {
            user && <div>
                <p> {user.displayName}</p>
                <p> {user.email}</p>
                <p> {user.photoURL}</p>
            </div>
          }
        </div>
    );
};

export default LogIn;