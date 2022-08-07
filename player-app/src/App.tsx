import React from 'react';
import './App.css';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main/Main';

function App() {
  // const items = ['2022', '2021', '2020', '2019', '2018'];
  return (
    <>
      <Login></Login>
      <Register></Register>
      <Main></Main>
    </>
  );
}

export default App;
