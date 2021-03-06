import React from 'react'
import logo from '../../assets/messenger-logo.jpg'
import {useStateValue} from '../../context/StateProvider'
import {auth, provider} from '../../context/firebase'

import './Login.css'

function Login() {
    const [ , dispatch] = useStateValue();


    const signInHandler = () => (
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: 'LOGIN', payload: result,
                user: localStorage.setItem('currentUser', JSON.stringify(result))
            })
        })
        .catch((error) => alert(error.message))
    )
    
    
    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="Logo"/>
                <h1>Sign in to Messenger</h1>
                <button onClick={signInHandler}>Sign In with Google</button>
            </div>
        </div>
    )
}

export default Login
