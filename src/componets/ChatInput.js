import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { db } from '../firebase'
import { collection, serverTimestamp } from 'firebase/firestore'
import { doc, addDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const ChatInput = ({ channelName, channelId, chatRef }) => {

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = async (e) => {
        e.preventDefault();
        console.log(channelId);
        if (!channelId) return false;

        const docRef = await addDoc(collection(db, "rooms", channelId, "message"), {
            message: input,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });
        console.log(docRef);

        setInput('');

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }

    return <ChatInputContainer>

        <form>
            <input value={input} placeholder={`Message #${channelName}`} onChange={(e) => setInput(e.target.value)} />
            <Button hidden type='submit' onClick={sendMessage}>send</Button>
        </form>

    </ChatInputContainer>
}

export default ChatInput;


const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form{
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form >input{
        position: fixed;
        bottom: 30px;
        width:60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button{
        display: none !important;
    }

`