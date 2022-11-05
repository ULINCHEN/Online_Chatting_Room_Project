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

function App() {
  return (
    <div className="app">

      <Router>

        <Header />

        <AppBody>
          <Sidebar />
          <Routes>

            <Route path="/" exact element={<Chat />} />

          </Routes>
        </AppBody>
      </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height:100vh;
  
`