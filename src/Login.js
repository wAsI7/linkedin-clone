import React from 'react'
import './Login.css'
import { login } from "./features/userSlice"
import { auth } from "./firebase"
import { useDispatch } from 'react-redux';

function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [profilePic, setProfilePic] = React.useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL

        }))
    }).catch((error) => alert(error));
    
}    
    const register = (e) => {
        if(!name) {
            return alert("Please Enter a Full Name!");
        }


        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }));
            });
        }).catch((error) => alert(error));
        
        //e.preventDefault()
        //window.location.href = 'http://localhost:3000/register'
    };

  return (
    <div className='login'>
        <img src='https://freelogopng.com/images/all_img/1656958733linkedin-logo-png.png' alt=''/>
        <form>

            <input 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder='Full Name' 
            type='text' 
            />

            <input 
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile pic URL' 
            type='text'
            />

            <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email' 
            type='email'
            />

            <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password' 
            type='password'
            />

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p> 
    </div>
  )
}

export default Login