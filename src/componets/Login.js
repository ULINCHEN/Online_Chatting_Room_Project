import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

    const signIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .catch((err) => alert(err.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='' />
                <h1>Sign in</h1>
                <p>ULINChat.com</p>
                <Button type='submit' onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`

    background-color: white;
    height: 100vh;
    display: grid;
    place-items: center;

`

const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0,0,0,0.24);

    > img{
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button{
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`