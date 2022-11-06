import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './Homepage';
import Header from './componets/Header';
import styled from 'styled-components';
import Sidebar from './componets/Sidebar';
import Chat from './componets/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'
import Login from './componets/Login';
import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src='https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='' />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }


  return (
    <div className="app">

      <Router>
        {!user ? (<Login />) : (

          <>
            <Header />

            <AppBody>
              <Sidebar />
              <Routes>

                <Route path="/" exact element={<Chat />} />

              </Routes>
            </AppBody>
          </>
        )}
      </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height:100vh;
  
`

const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width: 100%;
  
`
const AppLoadingContents = styled.div`
text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`